import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  btnText = 'Modifier Profile';
  isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

  save() {
    if (this.btnText === 'Modifier Profile') {
      this.btnText = 'Save Profile';
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
      this.btnText = 'Modifier Profile';
    }
  }

}
