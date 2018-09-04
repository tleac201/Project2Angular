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
    
    this.API.login(this.Login).subscribe(serviceToken => { token = serviceToken; } );
  }

  SendToRegister(){
    this.router.navigate(['register']);
  }
}
