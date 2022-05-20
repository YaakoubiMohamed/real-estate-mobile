import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.page.html',
  styleUrls: ['./sort.page.scss'],
})
export class SortPage implements OnInit {

  sortBy;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  sort(val) {
    this.sortBy = val;
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
