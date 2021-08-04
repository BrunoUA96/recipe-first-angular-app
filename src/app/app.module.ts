import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './header/dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { RoutePageComponent } from './route-page/route-page.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { CloseComponent } from './recipes/close.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { DataFormComponent } from './data-form/data-form.component';
import { HttpComponent } from './http/http.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoDialogComponent } from './todo/edit-todo-dialog/edit-todo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RoutePageComponent,
    RecipeEditComponent,
    CloseComponent,
    FormBasicComponent,
    DataFormComponent,
    HttpComponent,
    TodoComponent,
    TodoItemComponent,
    EditTodoDialogComponent,
  ],
  entryComponents: [EditTodoDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
