import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from  '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { 
   
  }

  ngOnInit() {
  }

  SendToHome(){
    this.router.navigate(['home']);
  }

  SendToRegister(){
    this.router.navigate(['register']);
  }
}
