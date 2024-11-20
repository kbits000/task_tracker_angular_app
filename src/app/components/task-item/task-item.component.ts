import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  faTimes = faTimes;
  @Input() task?: Task;         // This should not be optional. I could not fix it.
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();

  onDelete(){
    console.log(this.task);
    this.onDeleteTask.emit(this.task);
  }
}
