import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterPageModule } from '../app/pages/filter/filter.module';
import { SortPageModule } from './pages/sort/sort.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FilterPageModule, SortPageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }