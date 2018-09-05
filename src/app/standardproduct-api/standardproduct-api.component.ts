import { Component, OnInit } from '@angular/core';
import { StandardProducts } from '../service/pizza-api.service';
import { PizzaAPIService } from '../service/pizza-api.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-standardproduct-api',
  templateUrl: './standardproduct-api.component.html',
  styleUrls: ['./standardproduct-api.component.css']
})
export class StandardproductApiComponent implements OnInit {

  standardproducts: StandardProducts[];
  standardproduct: StandardProducts;
  standardproductToAdd: StandardProducts;
  //selectedSP: StandardProducts[];
  Checked : boolean[];

  constructor(private standardproductService: PizzaAPIService, 
    private route:ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    this.getStandardProducts()
  }

  checked(id) {
    if(!this.Checked[id]) {
      this.Checked[id] = true;
    }
    else {
      this.Checked[id] = false;
    }
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
    //console.log("component:getstandardProducts");
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
    SendToHome(){
      this.router.navigate(['home']);
    }
}
