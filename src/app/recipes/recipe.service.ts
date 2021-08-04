import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Teste',
      'teste',
      'https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/06/960_LAMB_PEACH_SKEWERS-299x310.jpg',
      [new Ingredient('testse', 777), new Ingredient('dfasfadfafd', 444)]
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/paneer-butter-masala.jpg',
      []
    ),
    new Recipe(
      'Pizza',
      'Pizza da Pizza da Pizza',
      'https://static.toiimg.com/thumb/56933159.cms?width=1200&height=900',
      [new Ingredient('Tomate', 2), new Ingredient('Fiambre', 5)]
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
      []
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/521_1_1438704359.jpg?tr=w-800,h-1066',
      []
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdrw1flBIEDQKV6hbPn9IHZZs5qL2_QzGsCaXPwmJJuDkQusqkRtyACy67yrYQYEDK1Q&usqp=CAU',
      []
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://www.thespruceeats.com/thmb/cO72JFFH0TCAufENSxUfqE8TmKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg',
      []
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',
      []
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://cookieandkate.com/images/2021/05/gremolata-recipe-2.jpg',
      []
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1571_2_1437661403.jpg?tr=w-800,h-1066',
      []
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA',
      []
    ),
    new Recipe(
      'Teste',
      'teste',
      'https://img.taste.com.au/vhZfDaJw/taste/2017/07/lemongrass-beef-bowl-128353-1.jpg',
      []
    ),
  ];
  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
