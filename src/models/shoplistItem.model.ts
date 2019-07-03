import { Product } from './product.model';

export class ShoplistItem
{
    constructor(
        public product: Product,
        public quantity: number,
    ) {}
}