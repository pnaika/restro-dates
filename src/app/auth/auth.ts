import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {NavController} from '@ionic/angular';
import {b} from '@angular/core/src/render3';
import {UserInfo} from 'firebase';

@Component({
  selector: 'auth',
  templateUrl: 'auth.html',
  styleUrls: ['auth.scss'],
})
export class Auth {
  public email: string = '';
  public name: string = '';
  public phone: string = '';
  public password: string = '';
  public errorMessage: string = '';
  public newUser: boolean = false;

  constructor(public nvCtrl: NavController, public afDB: AngularFireDatabase) {}

  public async createNewUser(): Promise<void> {
    try {
      await this.afDB.database.app.auth().createUserWithEmailAndPassword(this.email, this.password);
      await this.afDB.database.app.auth().currentUser.updateProfile({displayName: this.name, photoURL: null});

      console.log('New user created ');
      this.clearDetails();

    } catch (e) {
      this.errorMessage = e.message;
    }
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
    this.name = '';
    this.email = '';
  }

  public storeDataInLocalStorage(res) {
    if(res.user.uid === localStorage.getItem('uid')) {
        return;
    }

    localStorage.setItem('uid', res.user.uid);
  }
}
