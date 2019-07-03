import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/models/category.model';

@Injectable()
export class CategoryService {

    public categories: BehaviorSubject<Category[]> = new BehaviorSubject([
        new Category('Meat & Fish'),
        new Category('Grocery'),
        new Category('Fruit & Vegetable'),
        new Category('Cleaning'),
        new Category('Drink'),
    ])

    constructor() { }

    public getById(id: number){
        return this.categories.value[id];
    }
}
