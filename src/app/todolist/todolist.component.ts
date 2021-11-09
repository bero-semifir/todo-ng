import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

}
