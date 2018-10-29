import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AddRestaurantPage } from './add-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddRestaurantPage
      }
    ])
  ],
  declarations: [AddRestaurantPage]
})
export class AddRestaurantPageModule {


}
