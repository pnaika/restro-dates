import {Component, Input} from '@angular/core';

@Component({
  selector: 'restaurant-list-card',
  templateUrl: 'restaurant-list-card.html',
  styleUrls: ['restaurant-list-card.scss']
})
export class RestaurantListCard {

  @Input() restaurantList = [];

  constructor() {
    console.log('here', this.restaurantList);
  }
}

