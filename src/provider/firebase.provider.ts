import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class FirebaseService {

  constructor(public afb: AngularFireDatabase) {}

  public getRestaurantList(): Observable<any[]> {
    return this.afb.list('/restaurantDetails', ref => ref).valueChanges();
  }

  public addNewRestaurant(restroDetails) {
    return this.afb.list('/restaurantDetails/').push(restroDetails);
  }

  public deleteNewRestauran(id) {
    return this.afb.list('/restaurantDetails/').remove(id);
  }
}