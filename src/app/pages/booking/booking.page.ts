import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/tabs/home']);
  }

}
