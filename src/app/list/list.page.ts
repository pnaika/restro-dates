import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../provider/firebase.provider';
import {AngularFireDatabase} from '@angular/fire/database';
import {NavController} from '@ionic/angular';
import * as _ from 'lodash';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public restaurantList: Observable<any []>;
  public restroList: object = [];
  private currentUserUid = localStorage.getItem('uid');

  constructor(public nvCtrl: NavController, public afDB: AngularFireDatabase, public fireBaseService: FirebaseService) {
    this.restaurantList = this.fireBaseService.getRestaurantList();
    this.restaurantList.subscribe((list) => {
      this.restroList = _.filter(list, (listV) => listV.uid === this.currentUserUid);
    });
  }

  ngOnInit() {
  }
}

