import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AccountRegister } from '../service/pizza-api.service';
import { PizzaAPIService } from '../service/pizza-api.service';

@Component({
  selector: 'app-register-api',
  templateUrl: './register-api.component.html',
  styleUrls: ['./register-api.component.css']
})
export class RegisterAPIComponent implements OnInit {

  accounts: AccountRegister[];
  account: AccountRegister;
  accountToAdd: AccountRegister;

  constructor(private accountService: PizzaAPIService) {

  }

  ngOnInit() {
  }

  getAccount(id) {
    // Get one Account data.
    this.accountService.getAccount(id)
      .subscribe(a => {
        this.account = a;
        console.log(this.account);
      });
  }

  getAccounts() {
    this.accountService.getAccounts()
      .subscribe(a => {
        console.log(a);
        this.accounts = a;
        console.log(this.accounts);
      });
  }

  addAccount() {
    this.accountService.addAccount(this.accountToAdd)
      .subscribe(res => {
        this.getAccounts();
        alert('Account Added successfully');
      }),
      err => {
        console.log("Error occurred: " + err);
      };
    }

  updateAccount() {
    this.accountService.editAccount(this.account)
      .subscribe(res => {
        this.getAccounts();
        alert("Account data Updated successfully !!")
      });
  }

}
