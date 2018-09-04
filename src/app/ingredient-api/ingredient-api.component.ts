import { Component, OnInit } from '@angular/core';
import { PizzaAPIService, Ingredients } from '../service/pizza-api.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-ingredient-api',
  templateUrl: './ingredient-api.component.html',
  styleUrls: ['./ingredient-api.component.css']
})
export class IngredientApiComponent implements OnInit {

  ingredients: Ingredients[];
  basePrice: number = 10;
  //selectedIngredient: Ingredients;
  
  constructor(private ingrendientService: PizzaAPIService, 
    private route:ActivatedRoute, private router:Router) {
      
    }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingrendientService.getIngredients()
      .subscribe(i => {
        console.log(i);
        this.ingredients = i;
        console.log(this.ingredients);
      });
  }

  /*selectIngredient(ingredient: Ingredients) { 
    this.selectedIngredient = ingredient; 
  }*/

  SendToHome(){
    this.router.navigate(['home']);
  }
}