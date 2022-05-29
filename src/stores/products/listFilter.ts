import { acceptHMRUpdate, defineStore } from 'pinia'
import { useConnectedUser } from '../users/connected'
import { Direction } from '~/enums/products/filter/Direction'
import { ProductOrderBy } from '~/enums/products/filter/ProductOrderBy'
import type { ProductListFilter } from '~/types/product/filter/ProductListFilter'
import type { Pagination } from '~/types/product/filter/Pagination'

export const useProductListFilter = defineStore('productListFilter', () => {
  const { connectedUser } = useConnectedUser()

  const productListFilter: ProductListFilter = $ref({
    orderBy: {
      name: ProductOrderBy.name,
      direction: Direction.ASC,
    },
    filterBy: {
      name: '',
      step: 2,
    },
  })

  function setPagination(pagination: Pagination) {
    productListFilter.filterBy.pagination = pagination
  }

  function setStep(step?: number) {
    productListFilter.filterBy.step = step
  }

  function setOrderName(name: ProductOrderBy) {
    productListFilter.orderBy.name = name
  }

  function setFilterName(name: string) {
    productListFilter.filterBy.name = name
  }

  function getBooleanDirection(): boolean {
    return productListFilter.orderBy.direction === Direction.ASC
  }

  function setDirection(isAscending: boolean) {
    const direction = isAscending ? Direction.ASC : Direction.DESC
    productListFilter.orderBy.direction = direction
  }

  function setEditor(hasToFilterByEditor: boolean) {
    productListFilter.filterBy.editor = hasToFilterByEditor ? connectedUser?.id : undefined
  }

  return {
    setEditor,
    getBooleanDirection,
    setDirection,
    setFilterName,
    setOrderName,
    setStep,
    setPagination,
    productListFilter,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductListFilter, import.meta.hot))
