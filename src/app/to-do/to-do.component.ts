import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toDo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  todoList: ToDoModel[] = [];

  toDoStatus = [
    { value: 'Processing', color: 'warning' },
    { value: 'Pass', color: 'success' },
    { value: 'Falid', color: 'danger' },
  ];

  submit(value: ToDoModel) {
    let id = Math.floor(Math.random() * 100);
    let color = '';
    if (value.status == 'Pass') {
      color = 'success';
    } else if (value.status == 'Processing') {
      color = 'warning';
    } else {
      color = 'danger';
    }
    let todo: ToDoModel = {
      id: id,
      status: value.status,
      title: value.title,
      note: value.note,
      color: color
    };
    this.todoList.splice(0, 0, todo);
  }

  delTodo(id: number) {
    let todo = this.todoList.find(f => f.id == id);
    console.log(todo);
    
    // this.todoList.reduce(todo);
  }

}
export interface ToDoModel {
  id: number,
  title: string,
  note?: string,
  status: string,
  color?: string
}