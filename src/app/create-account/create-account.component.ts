import { Component } from '@angular/core';
import { AuthService } from '../login-page/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) { }

  createUserAccount() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.createAccount(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }
}
