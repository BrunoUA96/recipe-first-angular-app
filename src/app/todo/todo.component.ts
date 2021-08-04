import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from './shared/data.service';
import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  // *
  todos: Todo[];

  // *
  checkValidForm = false;

  // *
  constructor(private dataService: DataService, private dialog: MatDialog) {
    this.todos = this.dataService.getAllTodos();
  }

  ngOnInit() {}

  // *
  submTodoForm(f: NgForm) {
    // *Check All Form Status
    console.log(f);

    // *Validation Form
    if (f.invalid) {
      this.checkValidForm = true;
      return f;
    } else {
      this.checkValidForm = false;
    }

    // *Add new TODO to DataService
    this.dataService.addTodoItem(new Todo(f.value.text));

    // *Clean input after submit
    f.reset();
  }

  // *Change on click TODO checked state
  toggleCheckedItem(todo: Todo) {
    todo.checked = !todo.checked;
  }

  // *Edit Todo Item
  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo,
    });
  }
}
