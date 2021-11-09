import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  newTodo: Todo = new Todo("");

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo = () => {
    this.todoService.createTodo(this.newTodo);
    this.newTodo = new Todo("");
  }

}
