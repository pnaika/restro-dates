import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'New Restaurants',
      url: '/add-restaurant',
      icon: 'home'
    },
    {
      title: 'List of Restaurants',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Show All Restaurants',
      url: '/show-all-list',
      icon: 'list'
    },
    {
      title: 'LogOut',
      url: '/',
      icon: 'logout'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
