import { Component, OnInit } from '@angular/core';
import { DrinkAllInformation, Drinks } from '../drink-module/drinkClasses.module';


@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})



export class DrinkComponent implements OnInit {
  URL : string = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  myDrinkPromise : Promise<Drinks>;
  myDrink? : DrinkMapped;

  constructor() {
    this.myDrinkPromise = fetch(this.URL)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log("err: ", err);
      return null;
    })
  }

  ngOnInit(): void {
    Promise.resolve(this.myDrinkPromise)
    .then(res => {
      this.myDrink = this.mappingFullDrinkToDrinkMapped(res.drinks[0]);
    })
  }

  mappingFullDrinkToDrinkMapped(fullDrink:DrinkAllInformation) : DrinkMapped {
    console.log()
    return {
      idDrink: fullDrink.idDrink,
      strAlcoholic: fullDrink.strAlcoholic,
      strCategory: fullDrink.strCategory,
      strCreativeCommonsConfirmed: fullDrink.strCreativeCommonsConfirmed,
      strDrink: fullDrink.strDrink,
      strDrinkAlternate: fullDrink.strDrinkAlternate,
      strDrinkThumb: fullDrink.strDrinkThumb,
      strGlass: fullDrink.strGlass,
      strIBA: fullDrink.strIBA,
      strImageAttribution: fullDrink.strImageAttribution,
      strImageSource: fullDrink.strImageSource,
      ingredients : [
        fullDrink.strIngredient1, 
        fullDrink.strIngredient2,
        fullDrink.strIngredient3,
        fullDrink.strIngredient4,
        fullDrink.strIngredient5,
        fullDrink.strIngredient6,
        fullDrink.strIngredient7,
        fullDrink.strIngredient8,
        fullDrink.strIngredient9,
        fullDrink.strIngredient10,
        fullDrink.strIngredient11,
        fullDrink.strIngredient12,
        fullDrink.strIngredient13,
        fullDrink.strIngredient14,
        fullDrink.strIngredient15,
      ],
      strInstructions: fullDrink.strInstructions,
      strTags: fullDrink.strTags
    }
  }
}

export class DrinkMapped{
  "idDrink": string;
  "strAlcoholic": string;
  "strCategory": string;
  "strCreativeCommonsConfirmed": string;
  "strDrink": string;
  "strDrinkAlternate": string;
  "strDrinkThumb": string;
  "strGlass": string;
  "strIBA": string;
  "strImageAttribution": string;
  "strImageSource": string;
  "ingredients": string[];
  "strInstructions": string;
  "strTags": string;
}