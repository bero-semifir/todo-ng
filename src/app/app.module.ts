import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todolist/todo/todo.component';
import { TodoformComponent } from './todolist/todoform/todoform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoComponent,
    TodoformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
