import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'auth',
  templateUrl: 'auth.html',
  styleUrls: ['auth.scss'],
})
export class Auth {
  public email: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(public nvCtrl: NavController, public afDB: AngularFireDatabase) {}

  public createNewUser(): void {
    this.afDB.database.app.auth().createUserWithEmailAndPassword(this.email, this.password).then((res) => {
      this.clearDetails();
    }).catch((error) => {
      this.errorMessage = error.message;
    });
  }

  public signInUser(): void {
    this.afDB.database.app.auth().signInWithEmailAndPassword(this.email, this.password).then((res) => {
      this.storeDataInLocalStorage(res);
      this.clearDetails();
      this.nvCtrl.navigateForward('add-restaurant');
    }).catch((error) => {
      this.errorMessage = error.message;
    });
  }

  public clearDetails() {
    this.email = '';
    this.password = '';
    this.errorMessage = '';
  }

  public storeDataInLocalStorage(res) {
    if(res.user.uid === localStorage.getItem('uid')) {
        return;
    }

    localStorage.setItem('uid', res.user.uid);
  }
}
