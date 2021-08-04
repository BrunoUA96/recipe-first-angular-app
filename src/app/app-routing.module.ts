import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './data-form/data-form.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { HttpComponent } from './http/http.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RoutePageComponent } from './route-page/route-page.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
      { path: 'new', component: RecipesComponent },
    ],
  },
  { path: 'welcome', component: RoutePageComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'form-basic', component: FormBasicComponent },
  { path: 'data-form', component: DataFormComponent },
  { path: 'http-basic', component: HttpComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
