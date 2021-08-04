import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [
    `
      .actions_btns {
      }
    `,
  ],
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private sls: ShoppingListService) {}

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onClick(item: Ingredient) {
    this.selectedItem = item;
  }

  cleared() {
    this.selectedItem = null;
  }
}
