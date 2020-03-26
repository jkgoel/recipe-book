
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A test recipe description','https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg'),
    new Recipe('Another Test Recipe', 'Another test recipe description','https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
