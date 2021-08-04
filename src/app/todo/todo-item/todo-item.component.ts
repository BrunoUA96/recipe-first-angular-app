import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  // *Получаю каждый Айтем
  @Input() todoItem: Todo;

  // *Получаю индекс каждого Айтема из цыкла фор
  @Input() indexItem: any;

  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editTodoItem: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditTodoItem() {
    this.editTodoItem.emit();
  }
}
