import { Component, OnInit } from '@angular/core';
import { PizzaAPIService, Ingredients } from '../service/pizza-api.service';

@Component({
  selector: 'app-ingredient-api',
  templateUrl: './ingredient-api.component.html',
  styleUrls: ['./ingredient-api.component.css']
})
export class IngredientApiComponent implements OnInit {

  ingredients: Ingredients[];
  constructor(private ingrendientService: PizzaAPIService) { }

  ngOnInit() {
  }

  getIngredients() {
    this.ingrendientService.getIngredients()
      .subscribe(i => {
        console.log(i);
        this.ingredients = i;
        console.log(this.ingredients);
      });
  }

}
