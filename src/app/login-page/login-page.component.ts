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
  termsAccepted: boolean = false;
  usageMonitored: boolean = false;

  constructor(private auth: AuthService){
  }

  login1() {
    this.loginStatus = true;
    this.auth.login(this.username, this.password1);

    this.username = '';
    this.password1 = '';
    this.loginStatus = false;
  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
}
