import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
    providedIn : 'root'
})
export class PizzaAPIService {

  url: string = "http://localhost:55672/api/Account/Register";
  urlIngredients: string = "https://revproject2api.azurewebsites.net/api/Ingredients";
  urlSP: string = "https://revproject2api.azurewebsites.net/api/StandardProducts";

  accounts: Observable<AccountRegister[]>;
  account: Observable<AccountRegister>;
  ingredients: Observable<Ingredients>[];
  standardproduct: Observable<StandardProducts>;
  standardproducts: Observable<StandardProducts[]>;

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
      PhoneNumber: newAccount.PhoneNumber,
      Active: newAccount.Active
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
      PhoneNumber: editAccount.PhoneNumber,
      Active: editAccount.Active
    };
    return this.client.put<AccountRegister>(this.url + '/' + editAccount, body, {
      headers
    });
  }

  getIngredients() {
    return this.client.get<Ingredients[]>(this.urlIngredients);
  }

  getStandardProduct(id) {
    var newUrl = this.urlSP + `/${id}`;
    var standardproduct = this.client.get<StandardProducts>(newUrl);
    return standardproduct;
  }

  getStandardProducts() {
    return this.client.get<StandardProducts[]>(this.urlSP);
  }

  addStandardProduct(newStandardProduct: StandardProducts) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      StandardProductId : newStandardProduct.StandardProductId,
      Name: newStandardProduct.Name,
      Description: newStandardProduct.Description,
      Category: newStandardProduct.Category,
      Price: newStandardProduct.Price
    };
    return this.client.post<StandardProducts>(this.url, body, {
      headers
    });
  }
}

export class AccountRegister 
{
  Email: string;
  Password: string;
  ConfirmPassword: string;
  Firstname: string;
  Lastname: string;
  PhoneNumber: string;
  Active: boolean;
}

export class Ingredients
{
  IngredientId: number;
  IngredientName: string;
  Description: string;
  Price: number;
}

export class StandardProducts
{
  StandardProductId: number;
  Name: string;
  Description: string;
  Price: number;
  Category: string;
}