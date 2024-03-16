import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) {
  }

  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then(res => {
        localStorage.setItem('token','true');

        if(res.user?.emailVerified == true) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/create-account']);
        }

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

  googleSignIn() {
    this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      this.router.navigate(['/']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  createAccount(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/create-account']);
    })
  }

  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }
}
