import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Commentaire } from '../classes/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  commentaires: Observable<Commentaire[]>;




  constructor(public afs: AngularFirestore) { }

  addCommentaire(commentaire:Commentaire){
   return this.afs.collection('commentaires').add(commentaire);
  }

  getCommentaires(){
   return this.afs.collection('commentaires').snapshotChanges();
  }
  deleteCommentaire(id:string) {    
    return this.afs.collection('commentaires').doc(id).delete();
  }

  getCommentaireByID(id: string) {
    return this.afs.collection('commentaires').doc(id).valueChanges();
  }
  
  updateCommentaire(commentaire: Commentaire,id:string) {
    return this.afs.collection('commentaires').doc(id).update(commentaire);
  }
  
}
