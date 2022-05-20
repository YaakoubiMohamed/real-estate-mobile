import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users?: Observable<User[]>;


  constructor(public afs: AngularFirestore) { }

  addUser(user:User){
   return this.afs.collection('users').add(user);
  }

  getUsers(){
   return this.afs.collection('users').snapshotChanges();
  }
  deleteUser(id:string) {    
    return this.afs.collection('users').doc(id).delete();
  }

  getUserByID(id: string) {
    return this.afs.collection('users').doc(id).valueChanges();
  }
  
  updateUser(user: User,id:string) {
    return this.afs.collection('users').doc(id).update(user);
  }
}
