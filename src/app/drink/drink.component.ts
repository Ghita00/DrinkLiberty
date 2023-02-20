import { Component, OnInit } from '@angular/core';
import { DrinkAllInformation, Drinks } from '../drink-module/drinkClasses.module';


@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})



export class DrinkComponent implements OnInit {
  URL : string = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  myDrinkPromises : Array<Promise<Drinks>>;
  myDrinks? : Array<DrinkMapped>;

  constructor() {
    this.myDrinkPromises = new Array<Promise<Drinks>>();
    this.myDrinks = new Array<DrinkMapped>();

    for(let i = 0; i < 3; i++){
      this.myDrinkPromises.push(fetch(this.URL)
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log("err: ", err);
        return null;
      }));
    }
    
  }

  ngOnInit(): void {
    Promise.all(this.myDrinkPromises)
    .then(multipleRes => {
      this.myDrinks = multipleRes.map(res => this.mappingFullDrinkToDrinkMapped(res.drinks[0]));
    })
  }

  mappingFullDrinkToDrinkMapped(fullDrink:DrinkAllInformation) : DrinkMapped {
    let drinkMap =  {
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
      ingredients : new Array<string>(),
      strInstructions: fullDrink.strInstructions,
      strTags: fullDrink.strTags
    }

    if(fullDrink.strIngredient1){
      drinkMap.ingredients.push(fullDrink.strIngredient1 + " " + fullDrink.strMeasure1)
    }
    if(fullDrink.strIngredient2){
      drinkMap.ingredients.push(fullDrink.strIngredient2 + " " + fullDrink.strMeasure2)
    }
    if(fullDrink.strIngredient3){
      drinkMap.ingredients.push(fullDrink.strIngredient3 + " " + fullDrink.strMeasure3)
    }
    if(fullDrink.strIngredient4){
      drinkMap.ingredients.push(fullDrink.strIngredient4 + " " + fullDrink.strMeasure4)
    }
    if(fullDrink.strIngredient5){
      drinkMap.ingredients.push(fullDrink.strIngredient5 + " " + fullDrink.strMeasure5)
    }
    if(fullDrink.strIngredient6){
      drinkMap.ingredients.push(fullDrink.strIngredient6 + " " + fullDrink.strMeasure6)
    }
    if(fullDrink.strIngredient7){
      drinkMap.ingredients.push(fullDrink.strIngredient7 + " " + fullDrink.strMeasure7)
    }
    if(fullDrink.strIngredient8){
      drinkMap.ingredients.push(fullDrink.strIngredient8 + " " + fullDrink.strMeasure8)
    }
    if(fullDrink.strIngredient9){
      drinkMap.ingredients.push(fullDrink.strIngredient9 + " " + fullDrink.strMeasure9)
    }
    if(fullDrink.strIngredient10){
      drinkMap.ingredients.push(fullDrink.strIngredient10 + " " + fullDrink.strMeasure10)
    }
    if(fullDrink.strIngredient11){
      drinkMap.ingredients.push(fullDrink.strIngredient11 + " " + fullDrink.strMeasure11)
    }
    if(fullDrink.strIngredient12){
      drinkMap.ingredients.push(fullDrink.strIngredient12 + " " + fullDrink.strMeasure12)
    }
    if(fullDrink.strIngredient13){
      drinkMap.ingredients.push(fullDrink.strIngredient13 + " " + fullDrink.strMeasure13)
    }
    if(fullDrink.strIngredient14){
      drinkMap.ingredients.push(fullDrink.strIngredient14 + " " + fullDrink.strMeasure14)
    }
    if(fullDrink.strIngredient15){
      drinkMap.ingredients.push(fullDrink.strIngredient15 + " " + fullDrink.strMeasure15)
    }
    console.log(drinkMap.strTags)
    return drinkMap;
  }

  newCocktailForPage(){
    window.location.reload();
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
  "ingredients": Array<string>;
  "strInstructions": string;
  "strTags": string;
}