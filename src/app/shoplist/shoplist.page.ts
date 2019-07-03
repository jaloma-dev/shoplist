import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { Category } from 'src/models/category.model';
import { ProductService } from 'src/services/product.service';
import { CategoryService } from 'src/services/category.service';
import { ShoplistService } from 'src/services/shoplist.service';
import { ShoplistItem } from 'src/models/shoplistItem.model';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.page.html',
  styleUrls: ['./shoplist.page.scss'],
})
export class ShoplistPage implements OnInit {

    public categories: Category[] = [];
    public isHidden: boolean[] = [];
    public shoplist: any[] = [];

    constructor(
        private categoryService: CategoryService,
        private shoplistService: ShoplistService,
    ) { }

  ngOnInit() 
  {
      this.categoryService.categories.subscribe( (categories: Category[]) => this.categories = categories );
      this.shoplistService.shoplist.subscribe( (shoplist: ShoplistItem[]) => this.shoplist = shoplist );
      this.categories.forEach( (c, i) => this.isHidden[i] = false );
  }

  toggleDisplay(event, i: number): void
  {
    this.isHidden[i] = !this.isHidden[i];
  }

  displayIcon(i: number):string{
    return (this.isHidden[i])? 'arrow-dropdown' : 'arrow-dropleft';
  }
  
  removeItem(product: Product): void{
      this.shoplistService.removeItem(product);
  }
}
