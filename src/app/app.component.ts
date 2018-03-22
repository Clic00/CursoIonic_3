import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { SetupProvider } from '../providers/localstorage/setup';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [
    SetupProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    setupProvider: SetupProvider) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let setup = setupProvider.getSetupData();

      if(setup == null) {
        this.rootPage = IntroPage;
        setupProvider.setSetupData(false,"Levy");
      }
      else {
        this.rootPage = TabsPage;
      }
      
      console.log(setup);
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
