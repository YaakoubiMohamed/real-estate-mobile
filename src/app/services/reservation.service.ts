import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Reservation } from '../classes/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
  reservations?: Observable<Reservation[]>;


  constructor(public afs: AngularFirestore) { }

  addReservation(reservation:Reservation){
   return this.afs.collection('reservations').add(reservation);
  }

  getReservations(){
   return this.afs.collection('reservations').snapshotChanges();
  }
  deleteReservation(id:string) {    
    return this.afs.collection('reservations').doc(id).delete();
  }

  getReservationByID(id: string) {
    return this.afs.collection('reservations').doc(id).valueChanges();
  }
  
  updateReservation(reservation: Reservation,id:string) {
    return this.afs.collection('reservations').doc(id).update(reservation);
  }
  
}

