import { Component, OnInit } from '@angular/core';
import { StandardProducts } from '../service/pizza-api.service';
import { PizzaAPIService } from '../service/pizza-api.service';

@Component({
  selector: 'app-standardproduct-api',
  templateUrl: './standardproduct-api.component.html',
  styleUrls: ['./standardproduct-api.component.css']
})
export class StandardproductApiComponent implements OnInit {

  standardproducts: StandardProducts[];
  standardproduct: StandardProducts;
  standardproductToAdd: StandardProducts;

  constructor(private standardproductService: PizzaAPIService) { }

  ngOnInit() {
    this.getStandardProducts()
  }

  getStandardProduct(id) {
    // Get one Standard Product data.
    this.standardproductService.getStandardProduct(id)
      .subscribe(a => {
        this.standardproduct = a;
        console.log(this.standardproduct);
      });
  }

  getStandardProducts() {
    console.log("component:getstandardProducts");
    this.standardproductService.getStandardProducts()
      .subscribe(a => {
        console.log(a);
        this.standardproducts = a;
        console.log(this.standardproducts);
      });
  }

  addStandardProduct() {
    this.standardproductService.addStandardProduct(this.standardproductToAdd)
      .subscribe(res => {
        this.getStandardProducts();
        alert('Standard Product Added successfully');
      }),
      err => {
        console.log("Error occurred: " + err);
      };
    }
}
