import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TJsPizzaComponent } from './tjs-pizza/tjs-pizza.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAPIComponent } from './register-api/register-api.component';
import { StandardproductApiComponent } from './standardproduct-api/standardproduct-api.component';
import { IngredientApiComponent } from './ingredient-api/ingredient-api.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:TJsPizzaComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'registerAPI', component:RegisterAPIComponent},
  {path: 'standardproductAPI', component:StandardproductApiComponent},
  {path: 'ingredientAPI', component:IngredientApiComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
