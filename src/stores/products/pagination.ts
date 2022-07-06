import { acceptHMRUpdate, defineStore } from 'pinia'
import type { PaginationParam } from '~/types/product/filter/PaginationParam'

export const useProductPagination = defineStore('pagination', () => {
  const paginationParam: PaginationParam = $ref({
    currentPage: 1,
    start: 0,
    end: 6,
    maxProductsPerPage: 6,
  })

  function setPagination(currentPage: number): void {
    const { maxProductsPerPage } = paginationParam
    paginationParam.start = currentPage * (maxProductsPerPage - 1)
    paginationParam.end = currentPage * maxProductsPerPage
    paginationParam.currentPage = currentPage
  }

  return {
    setPagination,
    paginationParam,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductPagination, import.meta.hot))
