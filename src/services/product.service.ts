import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/models/product.model';
import { Category } from 'src/models/category.model';

@Injectable()
export class ProductService {
    private categories: Category[] = [
        new Category('Meat & Fish'),
        new Category('Grocery'),
        new Category('Fruit & Vegetable'),
        new Category('Cleaning'),
        new Category('Drink'),
    ];

    public products: BehaviorSubject<Product[]> = new BehaviorSubject([
        new Product('Steack', this.categories[0]),
        new Product('Cod', this.categories[0]),
        new Product('Chicken wings', this.categories[0]),
        new Product('Sausage', this.categories[0]),
        new Product('Shrimp', this.categories[0]),

        new Product('Pasta', this.categories[1]),
        new Product('Riz', this.categories[1]),
        new Product('Soup', this.categories[1]),
        new Product('Bean tin can', this.categories[1]),
        new Product('Ketchup', this.categories[1]),

        new Product('Tomato', this.categories[2]),
        new Product('Leek', this.categories[2]),
        new Product('Lemon', this.categories[2]),
        new Product('Strawberry', this.categories[2]),
        new Product('Broccoli', this.categories[2]),

        new Product('Laundry detergent', this.categories[3]),
        new Product('Dishwashing liquid', this.categories[3]),
        new Product('Floorclotch', this.categories[3]),

        new Product('Cola', this.categories[4]),
        new Product('Red wine', this.categories[4]),
        new Product('Water', this.categories[4]),
        new Product('Bear', this.categories[4]),
    ]);

    constructor() { }
}
