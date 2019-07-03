import { Category } from './category.model';

export class Product{

    constructor(
        public name: string,
        public category: Category,
    ){}

}