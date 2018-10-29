import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {NavController} from '@ionic/angular';
import {FirebaseService} from '../../provider/firebase.provider';

@Component({
  selector: 'app-home',
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

  constructor(public nvCtrl: NavController, public afDB: AngularFireDatabase, public fireBaseService: FirebaseService) {
  }

  public sentAddressDetails(): void {
    this.fireBaseService.addNewRestaurant({name: this.name, location: this.location, uid: localStorage.getItem('uid')})
      .then(() => {
        console.log('restro is added successfully');
      });
  }
}
