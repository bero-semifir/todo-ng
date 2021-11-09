import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // le ! indique à TS que la valeur sera assignée au runtime (à l'exécution)
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  checkTask = () => {
    this.todo.etat = !this.todo.etat;
    console.log(this.todo);
  }

  deleteTodo = () => {
    this.todoService.deleteTodo(this.todo);
  }

}
