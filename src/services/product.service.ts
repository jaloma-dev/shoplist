import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/models/product.model';
import { Category } from 'src/models/category.model';
import { CategoryService } from './category.service';

@Injectable()
export class ProductService {
    
    constructor(
        private categoryService: CategoryService,
    ) {}


    public products: BehaviorSubject<Product[]> = new BehaviorSubject([
        new Product('Steack', this.categoryService.getById(0)),
        new Product('Cod', this.categoryService.getById(0)),
        new Product('Chicken wings', this.categoryService.getById(0)),
        new Product('Sausage', this.categoryService.getById(0)),
        new Product('Shrimp', this.categoryService.getById(0)),

        new Product('Pasta', this.categoryService.getById(1)),
        new Product('Riz', this.categoryService.getById(1)),
        new Product('Soup', this.categoryService.getById(1)),
        new Product('Bean tin can', this.categoryService.getById(1)),
        new Product('Ketchup', this.categoryService.getById(1)),

        new Product('Tomato', this.categoryService.getById(2)),
        new Product('Leek', this.categoryService.getById(2)),
        new Product('Lemon', this.categoryService.getById(2)),
        new Product('Strawberry', this.categoryService.getById(2)),
        new Product('Broccoli', this.categoryService.getById(2)),

        new Product('Laundry detergent', this.categoryService.getById(3)),
        new Product('Dishwashing liquid', this.categoryService.getById(3)),
        new Product('Floorclotch', this.categoryService.getById(3)),

        new Product('Cola', this.categoryService.getById(4)),
        new Product('Red wine', this.categoryService.getById(4)),
        new Product('Water', this.categoryService.getById(4)),
        new Product('Bear', this.categoryService.getById(4)),
    ]);
}
