import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule',
    pathMatch: 'full'
  },
  {
    path: 'add-restaurant',
    loadChildren: './add-restaurant/add-restaurant.module#AddRestaurantPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'show-all-list',
    loadChildren: './show-all-list/show-all-list.module#ShowAllListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
