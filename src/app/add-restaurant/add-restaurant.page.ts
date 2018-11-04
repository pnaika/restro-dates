import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {NavController} from '@ionic/angular';
import {FirebaseService} from '../../provider/firebase.provider';
import * as _ from 'lodash';

@Component({
  selector: 'add-restaurant',
  templateUrl: 'add-restaurant.page.html',
  styleUrls: ['add-restaurant.page.scss'],
})
export class AddRestaurantPage {
  public name: string = '';
  public location = {
    address: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zipCode: ''
  };
  public errorMessage: string = '';
  public restaurantNearBy = [];
  public seachText = '';
  public toggled: boolean = false;

  constructor(public nvCtrl: NavController, public afDB: AngularFireDatabase, public fireBaseService: FirebaseService) {
  }

  public sentAddressDetails(): void {
    this.fireBaseService.addNewRestaurant({name: this.name, location: this.location, uid: localStorage.getItem('uid')})
      .then(() => {
        console.log('restro is added successfully');
      });
  }

  public getRestroList() {
    this.fireBaseService.getRestroNamesFromEatSTreetAPI(this.seachText).subscribe((value) => {
      this.restaurantNearBy = _.get(value, 'restaurants');
    });
  }
}
