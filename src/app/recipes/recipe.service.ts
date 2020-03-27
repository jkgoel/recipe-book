import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping.service";
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "A test recipe description",
      "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg",
      [new Ingredient("Item 1", 2), new Ingredient("Item 2", 4)]
    ),
    new Recipe(
      "Another Test Recipe",
      "Another test recipe description",
      "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg",
      [new Ingredient("Item 3", 6), new Ingredient("Item 4", 8)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
