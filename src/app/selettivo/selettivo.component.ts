import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selettivo',
  templateUrl: './selettivo.component.html',
  styleUrls: ['./selettivo.component.css']
})
export class SelettivoComponent implements OnInit {
  URL : string = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
  promiseAllDrink : Promise<any>;
  allDrink: any;

  constructor() {
    this.promiseAllDrink = fetch(this.URL)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log("err: ", err);
      return null;
    })
  }

  ngOnInit(): void {
    Promise.resolve(this.promiseAllDrink)
    .then(allDrinkRespo => {
      console.log(allDrinkRespo)
    })
  }

}
