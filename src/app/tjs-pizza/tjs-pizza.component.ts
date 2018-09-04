import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-tjs-pizza',
  templateUrl: './tjs-pizza.component.html',
  styleUrls: ['./tjs-pizza.component.css']
})
export class TJsPizzaComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

  SendToSP(){
    this.router.navigate(['standardproductAPI']);
  }

  SendToCP(){
    this.router.navigate(['ingredientAPI']);
  }
}
