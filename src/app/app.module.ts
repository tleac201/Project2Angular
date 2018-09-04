import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TJsPizzaComponent } from './tjs-pizza/tjs-pizza.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { RegisterAPIComponent } from './register-api/register-api.component';
import { IngredientApiComponent } from './ingredient-api/ingredient-api.component';
//import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TJsPizzaComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAPIComponent,
    IngredientApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
