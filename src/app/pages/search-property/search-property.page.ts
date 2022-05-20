import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-property',
  templateUrl: './search-property.page.html',
  styleUrls: ['./search-property.page.scss'],
})
export class SearchPropertyPage implements OnInit {

  task;
  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  chooseTask(val) {
    this.task = val;
  }

  async openFilter() {
    const modal = await this.modalController.create({
      component: FilterPage,
      cssClass: 'custom_modal'
    });
    return await modal.present();
  }

  goToPropertyList() {
    this.router.navigate(['/property-list']);
  }

}
