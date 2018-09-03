import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


@Injectable()
export class AccountService {

  url: string = "http://localhost:55672/Account/Register";

  accounts: Observable<AccountRegister[]>;
  account: Observable<AccountRegister>;

  constructor(private client: HttpClient) {

  }

  getAccount(id) {
    var newUrl = this.url + `/${id}`;
    var account = this.client.get<AccountRegister>(newUrl);
    return account;

  }

  getAccounts() {
    return this.client.get<AccountRegister[]>(this.url);
  }

  addAccount(newAccount: AccountRegister) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Email: newAccount.Email,
      Password: newAccount.Password,
      ConfirmPassword: newAccount.ConfirmPassword,
      Firstname: newAccount.Firstname,
      Lastname: newAccount.Lastname,
      PhoneNumber: newAccount.PhoneNumber
    };
    return this.client.post<AccountRegister>(this.url, body, {
      headers
    });
  }

  editAccount(editAccount: AccountRegister) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Email: editAccount.Email,
      Password: editAccount.Password,
      ConfirmPassword: editAccount.ConfirmPassword,
      Firstname: editAccount.Firstname,
      Lastname: editAccount.Lastname,
      PhoneNumber: editAccount.PhoneNumber
    };
    return this.client.put<AccountService>(this.url + '/' + editAccount, body, {
      headers
    });
  }
}

export class AccountRegister {
  Email: string;
  Password: string;
  ConfirmPassword: string;
  Firstname: string;
  Lastname: string;
  PhoneNumber: string;
}
