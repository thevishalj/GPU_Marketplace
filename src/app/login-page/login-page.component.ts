import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginStatus = false;
  email : string = '';
  password : string = '';

  constructor(private auth: AuthService){
  }

  login() {
    this.loginStatus = true;

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);
    
    this.email = '';
    this.password = '';
    this.loginStatus = false;
  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
}
