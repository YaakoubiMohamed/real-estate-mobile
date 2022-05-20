import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DummyService } from 'src/app/services/dummy.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.page.html',
  styleUrls: ['./property-detail.page.scss'],
})
export class PropertyDetailPage implements OnInit {

  homes;
  annonce: any;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private dummy: DummyService,
    private inApp: InAppBrowser) {
    this.homes = this.dummy.homes;
  }

  ngOnInit() {
    this.annonce = JSON.parse(localStorage.getItem('annonce')) || {};
    console.log(this.annonce);
  }

  goBack() {
    this.navCtrl.back();
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }

  goToTour() {
    this.router.navigate(['/video']);
  }

  openView() {
    const url = 'https://initstore.net/panaroma/?url=https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2014/09/Venice.Still001.jpeg';

    console.log('only url', url);
    const options: InAppBrowserOptions = {
      location: 'no',
      clearcache: 'yes',
      zoom: 'no',
      toolbar: 'no',
      closebuttoncaption: 'close'
    };
    const browser: any = this.inApp.create(url, '_blank', options);
  }

}
