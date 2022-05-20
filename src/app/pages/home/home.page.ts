import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';
import { AnnonceService } from '../../services/annonce.service';
import { Annonce } from '../../classes/annonce';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  homes;
  plt;
  annonces: Annonce[];
  constructor(private dummy: DummyService, private router: Router,
    private annonceservice: AnnonceService) {
    this.plt = localStorage.getItem('platform');
    this.homes = this.dummy.homes;
  }

  ngOnInit() {
    this.getAnnonce();
  }

  getAnnonce(){
    this.annonceservice.getAnnonces().subscribe(admin => {
      this.annonces = admin.map(item => {
        let uid = item.payload.doc.id;
        //let data = item.payload.doc.data()
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as Annonce;
      });
      console.log(this.annonces);           
    });
  }

  goToPropertyDetail(item) {
    localStorage.setItem('annonce', JSON.stringify(item));
    this.router.navigate(['/property-detail']);
  }

}
