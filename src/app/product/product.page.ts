import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/models/product.model';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/models/category.model';
import { ShoplistService } from 'src/services/shoplist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
    public products: Product[] = [];
    public categories: Category[] = [];
    public isHidden: boolean[] = [];
    public shoplist: any[] = [];

    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        private shoplistService: ShoplistService,
    ) { }

  ngOnInit() 
  {
      this.categoryService.categories.subscribe( (categories: Category[]) => {
        this.categories = categories;
      });
      this.productService.products.subscribe( (products: Product[]) => {
          this.products = products;
      })
      this.categories.forEach( (c, i) => {
          this.isHidden[i] = false;
      })
  }

  toggleDisplay(event, i: number): void
  {
    this.isHidden[i] = !this.isHidden[i];
  }

  displayIcon(i: number):string{
    return (this.isHidden[i])? 'arrow-dropdown' : 'arrow-dropleft';
  }

  addProduct(product: Product): void
  {
    this.shoplistService.addProduct(product);
  }

  removeProduct(product: Product): void
  {
    this.shoplistService.removeProduct(product);
  }

}
