import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TJsPizzaComponent } from './tjs-pizza/tjs-pizza.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:TJsPizzaComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
