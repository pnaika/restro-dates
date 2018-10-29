import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {Toaster} from './common/toaster';
import {FirebaseService} from '../provider/firebase.provider';
import {HttpClientModule} from '@angular/common/http';

const config = {
  apiKey: 'AIzaSyC313qO2Yye3JbgPwOaGm1Z56j4wz53UpI',
  authDomain: 'restro-dates.firebaseapp.com',
  databaseURL: 'https://restro-dates.firebaseio.com',
  storageBucket: 'restro-dates.appspot.com',
};

@NgModule({
  declarations: [AppComponent, Toaster],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    FirebaseService,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
