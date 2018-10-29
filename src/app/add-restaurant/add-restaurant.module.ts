import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AddRestaurantPage } from './add-restaurant.page';
import {RestaurantListCardModule} from '../common/restaurant-list-card/restaurant-list-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantListCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddRestaurantPage
      }
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [AddRestaurantPage]
})
export class AddRestaurantPageModule {


}
