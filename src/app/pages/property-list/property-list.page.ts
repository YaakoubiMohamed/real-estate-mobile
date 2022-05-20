import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { SortPage } from '../sort/sort.page';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.page.html',
  styleUrls: ['./property-list.page.scss'],
})
export class PropertyListPage implements OnInit {

  homes;
  constructor(private dummy: DummyService, private router: Router, private modalController: ModalController, private navCtrl: NavController) {
    this.homes = this.dummy.homes;
  }

  ngOnInit() {
  }

  async openSort() {
    const modal = await this.modalController.create({
      component: SortPage,
      cssClass: 'sort_modal'
    });
    return await modal.present();
  }

  goToPropertyDetail() {
    this.router.navigate(['/property-detail']);
  }

  goBack() {
    this.navCtrl.back();
  }

}
