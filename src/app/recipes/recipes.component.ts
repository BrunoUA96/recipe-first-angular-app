import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  showDetail: boolean;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      if (this.router.url !== '/recipes') {
        this.showDetail = true;
      } else {
        this.showDetail = false;
      }
    });
  }

  ngOnInit() {}
}
