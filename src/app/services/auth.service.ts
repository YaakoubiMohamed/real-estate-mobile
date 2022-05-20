import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import * as auth from 'firebase/auth';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { AngularFireAuth } from '@angular/fire/auth';


export class user {
  email?: string='';
  password?: string='';
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  auth: any;


  
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }


  // Sign in with email/password
  SignIn(login: { email: string; password: string; }) {
    return this.afAuth
      .signInWithEmailAndPassword(login.email, login.password)
      .then((result) => {
        this.ngZone.run(() => {
          //this.router.navigate(['home']);
        });
        
      });
  }


  changePassword(token: string, newPassword: string) {
    return this.afAuth.confirmPasswordReset(token, newPassword);
  }


  // Sign up with email/password
  SignUp(user:User) {
    return this.afAuth
      .createUserWithEmailAndPassword(user.email!, user.password!)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        //this.SendVerificationMail();
        this.createUser(user,result.user!.uid);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  resetPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }
  // Sign in with Google

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  
  createUser(user: User,id:string) {
    
  }
  
  SetUserData(user: any) {
    console.log(user);
    
  }

  updateUserPassword(user: any) {
    return this.auth.updateCurrentUser( user.password ).then((data) => {
      console.log(data);
      console.log('Password updated');
    });
  }



  // Sign out
  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('userInfo');
      this.router.navigate(['']);
    });
  }
}
function getASecureRandomPassword() {
  throw new Error('Function not implemented.');
}

