import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable()
export class FirebaseService {

  constructor(public afb: AngularFireDatabase, private http: HttpClient) {}

  public getRestaurantList(): Observable<any[]> {
    return this.afb.list('/restaurantDetails', ref => ref).valueChanges();
  }

  public addNewRestaurant(restroDetails) {
    return this.afb.list('/restaurantDetails/').push(restroDetails);
  }

  public deleteNewRestauran(id) {
    return this.afb.list('/restaurantDetails/').remove(id);
  }

  public getRestroNamesFromEatSTreetAPI(text: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Access-Token': '63841890b90898a4'
      })
    };

    return this.http.get(`https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&street-address=${text}`, httpOptions);
  }
}