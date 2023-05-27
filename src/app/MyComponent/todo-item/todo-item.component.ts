import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo:any;
  @Input() i:any;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox:EventEmitter<Todo> = new EventEmitter();

  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("Delete button is trigered");
  }
  
  onCheckBoxClick(todo:Todo){
    this.todoCheckBox.emit(todo);
  }
  ngOnInit(){}

}
