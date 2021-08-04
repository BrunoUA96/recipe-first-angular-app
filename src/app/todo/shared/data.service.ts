import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // *Items in DOTO List
  todos: Todo[] = [
    new Todo('This is a teste'),
    new Todo(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat nam quis voluptas quisquam quidem exercitationem'
    ),
    new Todo(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat nam quis voluptas quisquam quidem exercitationem ut laborum earum pariatur nesciunt eaque, consectetur dolore delectus nemo, ratione deleniti ex cumque!'
    ),
  ];

  constructor() {}

  // *Show All TODO Arrey
  getAllTodos() {
    return this.todos;
  }

  // *Add new item
  addTodoItem(todo: Todo) {
    this.todos.push(todo);
  }

  // *Update changened TODO Item
  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo;
  }

  // *Delete TODO Item
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
