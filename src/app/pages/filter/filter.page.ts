import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  type;
  rooms;
  bath;
  furnish;
  selFacility = [];

  facilities = [
    {
      name : 'Air-Conditioner',
      status : 0
    },
    {
      name : 'Television',
      status : 0
    },
    {
      name : 'Laundry',
      status : 0
    },
    {
      name : 'Wardrobe',
      status : 0
    },
    {
      name : 'Parking',
      status : 0
    },
    {
      name : 'Wifi',
      status : 0
    }
  ];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  chooseType(val) {
    this.type = val;
  }

  chooseRooms(val) {
    this.rooms = val;
  }

  choosebath(val) {
    this.bath = val;
  }

  selectFurnish(val) {
    this.furnish = val;
  }

  // selectFacilities(item) {

  //   this.facilities.forEach(element => {
  //     if (element.name === item) {
  //       if (element.status === 0) {
  //         element.status = 1;
  //       } else {
  //         element.status = 0;
  //       }
  //     }
  // }

  selectFacilities(item) {
    this.facilities.forEach(element => {
      if (element.name === item.name) {
        if (element.status === 0) {
          element.status = 1;
        } else {
          element.status = 0;
        }
      }
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
