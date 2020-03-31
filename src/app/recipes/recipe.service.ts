import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  constructor(private shoppingService: ShoppingListService) {}

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "A Test Recipe",
  //     "A test recipe description",
  //     "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg",
  //     [new Ingredient("Item 1", 2), new Ingredient("Item 2", 4)]
  //   ),
  //   new Recipe(
  //     "Another Test Recipe",
  //     "Another test recipe description",
  //     "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg",
  //     [new Ingredient("Item 3", 6), new Ingredient("Item 4", 8)]
  //   )
  // ];

  private recipes: Recipe[] = [];

  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): number {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
    return this.recipes.indexOf(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
