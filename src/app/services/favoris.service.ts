import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Favoris } from '../classes/favoris';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  favoris?: Observable<Favoris[]>;


  constructor(public afs: AngularFirestore) { }

  addFavoris(annonce:Favoris){
   return this.afs.collection('favoris').add(annonce);
  }

  getFavoris(){
   return this.afs.collection('favoris').snapshotChanges();
  }
  deleteFavoris(id:string) {    
    return this.afs.collection('favoris').doc(id).delete();
  }

  getFavorisByID(id: string) {
    return this.afs.collection('favoris').doc(id).valueChanges();
  }
  
  updateFavoris(annonce: Favoris,id:string) {
    return this.afs.collection('favoris').doc(id).update(annonce);
  }
  
}

