import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Publication } from '../classes/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  publications?: Observable<Publication[]>;


  constructor(public afs: AngularFirestore) { }

  addPublication(publication:Publication){
   return this.afs.collection('publications').add(publication);
  }

  getPublications(){
   return this.afs.collection('publications').snapshotChanges();
  }
  deletePublication(id:string) {    
    return this.afs.collection('publications').doc(id).delete();
  }

  getPublicationByID(id: string) {
    return this.afs.collection('publications').doc(id).valueChanges();
  }
  
  updatePublication(publication: Publication,id:string) {
    return this.afs.collection('publications').doc(id).update(publication);
  }
  
}
