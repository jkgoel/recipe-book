import { Ingredient } from '../shared/Ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
@Injectable()
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Chocolate',4),
    new Ingredient('Cream',5),
 ];

 getIngredients(){
   return this.ingredients.slice();
 };

 addIngredient(ingredients: Ingredient){
   this.ingredients.push(ingredients);
   this.ingredientAdded.emit(this.ingredients.slice());
 };

 addIngredients(ingredients: Ingredient[]){
   this.ingredients.push(...ingredients);
   this.ingredientAdded.emit(this.ingredients.slice());
 }

}
