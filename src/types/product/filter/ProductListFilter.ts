import type { Direction } from '../../../enums/products/filter/Direction'
import type { ProductOrderBy } from '../../../enums/products/filter/ProductOrderBy'
import type { Pagination } from './Pagination'

export interface ProductListFilter {
  orderBy: {
    name: ProductOrderBy
    direction: Direction
  }
  filterBy: {
    name: string
    pagination?: Pagination
    step?: number
    editor?: string
  }
}
