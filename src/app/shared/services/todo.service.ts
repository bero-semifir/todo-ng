import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [
    new Todo("Créer un composant Todo", true),
    new Todo("Créer un composant TodoForm"),
    new Todo("Créer un service Todo"),
    new Todo("Créer un modéle Todo", true),
    new Todo("Ajouter des todos"),
  ]

  constructor() { }

  getTodos(): Todo[] {
    let rawTodos = localStorage.getItem("todos");
    if (rawTodos) {
      this.todos = JSON.parse(rawTodos);
    } else {
      this.todos = [];
    }
    return this.todos;
  }

  createTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    
    this.saveTodos();
  }

  deleteTodo(todo: Todo) {
    // récup de l'index du todo dans le tableau (position)
    let todoIndex = this.todos.findIndex((t) => t.id === todo.id);
    // retirer le todo du tableau
    this.todos.splice(todoIndex, 1);
    this.saveTodos();
  }

  private saveTodos() {
    let todosJson = JSON.stringify(this.todos);
    localStorage.setItem("todos", todosJson);
  }

}
