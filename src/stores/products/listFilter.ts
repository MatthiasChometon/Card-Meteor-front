import { acceptHMRUpdate, defineStore } from 'pinia'
import { useConnectedUser } from '../users/connected'
import { useProductPagination } from './pagination'
import { Direction } from '~/enums/products/filter/Direction'
import { ProductOrderBy } from '~/enums/products/filter/ProductOrderBy'
import type { ProductListFilter } from '~/types/product/filter/ProductListFilter'

export const useProductListFilter = defineStore('productListFilter', () => {
  const { connectedUser } = useConnectedUser()
  const { paginationParam } = useProductPagination()

  const productListFilter: ProductListFilter = $ref({
    orderBy: {
      name: ProductOrderBy.name,
      direction: Direction.ASC,
    },
    filterBy: {
      name: '',
      step: 3,
      pagination: {
        start: paginationParam.start,
        end: paginationParam.end,
      },
    },
  })

  watch(paginationParam, () => {
    const { start, end } = paginationParam
    productListFilter.filterBy.pagination = { start, end }
  })

  function setStep(step?: number) {
    productListFilter.filterBy.step = step
  }

  function setOrderName(name: ProductOrderBy) {
    productListFilter.orderBy.name = name
  }

  function setFilterName(name: string) {
    productListFilter.filterBy.name = name
  }

  function setDirection() {
    const direction = productListFilter.orderBy.direction === Direction.ASC ? Direction.DESC : Direction.ASC
    productListFilter.orderBy.direction = direction
  }

  function setEditor(hasToFilterByEditor: boolean) {
    productListFilter.filterBy.editor = hasToFilterByEditor ? connectedUser?.id : undefined
  }

  return {
    setEditor,
    setDirection,
    setFilterName,
    setOrderName,
    setStep,
    productListFilter,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductListFilter, import.meta.hot))
