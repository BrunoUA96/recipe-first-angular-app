import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  @Input() selectedRecipe: Recipe;
  recipeIndex: number;
  private subscription: Subscription;

  constructor(
    private sls: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.recipeIndex = params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
    });
  }

  addToList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
