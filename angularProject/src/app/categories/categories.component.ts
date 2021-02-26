import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  products:any="";
  constructor() { }

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>this.products=json)
    .then(json=>console.log(json)),

    this.products = this.products.sort((low:any, high:any) => low.price-high.price);


  }


  sort(event: any)
  {

    switch (event.target.value) {
      case "Low":
        {
          this.products = this.products.sort((low, high) => low.Price - high.Price);
          break;
        }

      case "High":
        {
          this.products = this.products.sort((low, high) => high.Price - low.Price);
          break;
        }

      case "Name":
        {
          this.products = this.products.sort(function (low, high) {
            if (low.Name < high.Name) {
              return -1;
            }
            else if (low.Name > high.Name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.products = this.products.sort((low, high) => low.Price - high.Price);
        break;
      }

    }
    return this.products;

  }

}
