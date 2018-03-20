import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PrincipalPage,
  TabsPage,
  ActorPage,
  MensajePage,
  AudioPage } from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    TabsPage,
    ActorPage,
    MensajePage,
    AudioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atras'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    TabsPage,
    ActorPage,
    MensajePage,
    AudioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
