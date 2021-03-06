import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootPage } from './root.page';

const routes: Routes = [
  {
    path: 'root',
    component: RootPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module')
          .then(m => m.HomePageModule)
      }, {
        path: 'all-list',
        loadChildren: () => import('../all-list/all-list.module')
          .then(m => m.AllListPageModule)
      }, {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      }, {
        path: 'user-profile/:userid',
        loadChildren: () => import('../user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      }, {
        path: 'shop-profile/:shopid',
        loadChildren: () => import('../shop-profile/shop-profile.module').then(m => m.ShopProfilePageModule)
      }, {
        path: 'user-bill/:userid',
        loadChildren: () => import('../user-bill/user-bill.module').then(m => m.UserBillPageModule)
      }, {
        path: 'cart',
        loadChildren: () => import('../cart/cart-routing.module')
          .then(m => m.CartPageRoutingModule)
      }, {
        path: '',
        redirectTo: '/root/home',
        pathMatch: 'full'
      }
    ]
  }, {
    path: '',
    redirectTo: '/root/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootPageRoutingModule { }
