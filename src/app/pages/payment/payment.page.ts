import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  method;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  chooseMethod(val) {
    this.method = val;
  }

  goToAddCard() {
    this.router.navigate(['/add-card']);
  }

  goToBooking() {
    this.router.navigate(['/booking']);
  }
}
