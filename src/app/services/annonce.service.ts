import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Annonce } from '../classes/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  annonces?: Observable<Annonce[]>;


  constructor(public afs: AngularFirestore) { }

  addAnnonce(annonce:Annonce){
   return this.afs.collection('annonces').add(annonce);
  }

  getAnnonces(): Observable<Annonce[]>{
   return this.afs.collection('annonces').snapshotChanges();
  }
  deleteAnnonce(id:string) {    
    return this.afs.collection('annonces').doc(id).delete();
  }

  getAnnonceByID(id: string) {
    return this.afs.collection('annonces').doc(id).valueChanges();
  }
  
  updateAnnonce(annonce: Annonce,id:string) {
    return this.afs.collection('annonces').doc(id).update(annonce);
  }
  
}

