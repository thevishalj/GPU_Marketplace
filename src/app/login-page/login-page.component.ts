import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginStatus = false;
  username : string = '';
  password1 : string = '';

  constructor(private auth: AuthService){
  }

  login1() {
    this.loginStatus = true;

    if(this.username == '') {
      alert('Please enter email');
      return;
    }

    if(this.password1 == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.username, this.password1);

    this.username = '';
    this.password1 = '';
    this.loginStatus = false;
  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
}
