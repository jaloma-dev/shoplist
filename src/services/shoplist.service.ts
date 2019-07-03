import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoplistItem } from 'src/models/shoplistItem.model';
import { Product } from 'src/models/product.model';

@Injectable()
export class ShoplistService {

    public shoplist: BehaviorSubject<ShoplistItem[]> = new BehaviorSubject([]);

   constructor() { }

   addProduct(product: Product): void
   {
        const index = this.findIndexProduct(product);

        if(index === -1){
            this.shoplist.value.push(new ShoplistItem(product, 1));
        } else {
            this.shoplist.value[index].quantity++;
        }
   }

   removeProduct(product: Product): void{
        const index = this.findIndexProduct(product);
        
        if(index > -1) {
            if(this.shoplist.value[index].quantity === 1) {
                this.shoplist.value.splice(index, 1);
            } else {
                this.shoplist.value[index].quantity--;
            }
        }
   }

   removeItem(product: Product) :void
   {
       const index = this.findIndexProduct(product);

       if(index > -1) this.shoplist.value.splice(index, 1);
   }

   findIndexProduct(product: Product): number
   {
    return this.shoplist.value.findIndex( item => {
        return item.product.name === product.name;
    })
   }
}
