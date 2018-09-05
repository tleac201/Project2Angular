import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from  '@angular/router';
import {Router} from '@angular/router';
import { Login } from '../Service/pizza-api.service';
import { PizzaAPIService } from '../Service/pizza-api.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login: Login;
  token: string;
  userName: string;
  constructor(private route:ActivatedRoute, private router:Router, private API: PizzaAPIService) { 
   this.Login = new Login();
  }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.Login.Email = email;
    this.Login.Password = password;
    var token : string;
    
    let promise = new Promise((resolve, release) => {
      this.API.login(this.Login).toPromise()
      .then(
        //serviceToken => { token = serviceToken; resolve(token = serviceToken);}
        //response => { console.log(response.body.access_token); resolve(  ); }
        serviceToken => 
        {
          delay(500);
          sessionStorage.setItem('auth', serviceToken.body.access_token);
          token = sessionStorage.getItem('auth');
        }
      );
    });
    console.log(sessionStorage.getItem('auth'));
  }

  SendToRegister(){
    this.router.navigate(['register']);
  }
}
