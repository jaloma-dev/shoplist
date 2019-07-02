import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'shoplist',
        children: [
          {
            path: '',
            loadChildren: '../shoplist/shoplist.module#ShoplistPageModule'
          }
        ]
      },
      {
        path: 'product',
        children: [
          {
            path: '',
            loadChildren: '../product/product.module#ProductPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/shoplist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/shoplist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
