import type { Product } from './Product'

export type ProductForList = Product & { number?: number; editor: string }
