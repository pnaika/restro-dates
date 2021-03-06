import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RestaurantListCard } from './restaurant-list-card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [RestaurantListCard],
  exports: [
    RestaurantListCard
  ]
})
export class RestaurantListCardModule {}
