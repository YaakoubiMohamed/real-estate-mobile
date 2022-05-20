import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Message } from '../classes/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages?: Observable<Message[]>;


  constructor(public afs: AngularFirestore) { }

  addMessage(message:Message){
   return this.afs.collection('messages').add(message);
  }

  getMessages(){
   return this.afs.collection('messages').snapshotChanges();
  }
  deleteMessage(id:string) {    
    return this.afs.collection('messages').doc(id).delete();
  }

  getMessageByID(id: string) {
    return this.afs.collection('messages').doc(id).valueChanges();
  }
  
}

