import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { Dialog, Notify, Quasar } from 'quasar'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'
import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import '@quasar/extras/roboto-font/roboto-font.css'

const routes = setupLayouts(generatedRoutes)
const cache = new InMemoryCache({
  addTypename: true,
})
const uri = `${import.meta.env.VITE_GRAPHQL_URL}/graphql`

const link = createUploadLink({
  credentials: 'include',
  uri,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken')
  return {
    headers: {
      ...headers,
      'Access-Control-Allow-Credentials': true,
      'authorization': token ? `Bearer ${token}` : '',
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(link),
  cache,
  uri,
  defaultOptions: { mutate: { errorPolicy: 'all' } },
})

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    ctx.app.use(Quasar, {
      plugins: { Notify, Dialog },
    })
    ctx.app.provide(DefaultApolloClient, apolloClient)
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
