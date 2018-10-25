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
    // this.toaster.presentToast();
    this.afDB.database.app.auth().createUserWithEmailAndPassword(this.email, this.password).then((res) => {
      console.log('response ', res);
      // this.toaster.dismissToast();
    }).catch((error) => {
      this.errorMessage = error.message;
      // this.toaster.dismissToast();
    });
  }

  public signInUser(): void {
    // this.toaster.presentToast();
    this.afDB.database.app.auth().signInWithEmailAndPassword(this.email, this.password).then((res) => {
      this.nvCtrl.navigateForward('home');
      // this.toaster.dismissToast();
    }).catch((error) => {
      this.errorMessage = error.message;
      // this.toaster.dismissToast();
    });
  }
}
