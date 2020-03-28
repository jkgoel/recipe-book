import { Ingredient } from '../shared/Ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Chocolate',4),
    new Ingredient('Cream',5),
 ];

 getIngredients(){
   return this.ingredients.slice();
 };

 addIngredient(ingredients: Ingredient){
   this.ingredients.push(ingredients);
   this.ingredientAdded.next(this.ingredients.slice());
 };

 addIngredients(ingredients: Ingredient[]){
   this.ingredients.push(...ingredients);
   this.ingredientAdded.next(this.ingredients.slice());
 }

}
