import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError, from } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { catchError, retry } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { resolve, reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class PizzaAPIService {

  url: string = "https://revproject2api.azurewebsites.net/api";
  urlAccount = this.url+"/Account";
  urlIngredients: string = this.url+"/Ingredients";
  urlSP: string = this.url+"/StandardProducts";
  urlSC: string = this.url+"/ShoppingCart"

  accounts: Observable<AccountRegister[]>;
  account: Observable<AccountRegister>;
  ingredients: Observable<Ingredients>[];
  standardproduct: Observable<StandardProducts>;
  standardproducts: Observable<StandardProducts[]>;
  token: string;
  constructor(private client: HttpClient) {

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  login(login: Login): Observable<HttpResponse<loginResponse>>{
    var options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'response'
    };
    /*
    this.client.post<loginResponse>(
      this.url = "http://localhost:55672/api/Account/Login", JSON.stringify(login), options
    )*/
    return this.client.post<loginResponse>(
       this.urlAccount+"/Login", JSON.stringify(login), options
    )
  }

  getAccount(id) {
    var newUrl = this.urlAccount + `/${id}`;
    var account = this.client.get<AccountRegister>(newUrl);
    return account;
  }

  getAccounts() {
    return this.client.get<AccountRegister[]>(this.urlAccount);
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
    return this.client.post<AccountRegister>(this.urlAccount, body, {
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
    return this.client.put<AccountRegister>(this.urlAccount + '/' + editAccount, body, {
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
      StandardProductId: newStandardProduct.StandardProductId,
      Name: newStandardProduct.Name,
      Description: newStandardProduct.Description,
      Category: newStandardProduct.Category,
      Price: newStandardProduct.Price
    };
    return this.client.post<StandardProducts>(this.urlSP, body, {
      headers
    });
  }
}

export class loginResponse {
  access_token:string;
  token_type:string;
  expires_in:number;
  userName:string;
  ".issued":string;
  ".expires":string;
}

export class AccountRegister {
  Id?: number
  Email: string;
  Password: string;
  ConfirmPassword: string;
  Firstname: string;
  Lastname: string;
  PhoneNumber: string;
  Active: boolean;
}

export class Ingredients {
  IngredientId: number;
  IngredientName: string;
  Description: string;
  Price: number;
}

export class StandardProducts {
  StandardProductId: number;
  Name: string;
  Description: string;
  Price: number;
  Category: string;
}

export class Login {
  Email: string;
  Password: string;
}