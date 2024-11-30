import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle, NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  faTimes = faTimes;
  @Input() task?: Task;         // This should not be optional. I could not fix it.
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();

  onDelete(task?: Task){  // This should not be optional. I could not fix it.
    console.log(this.task);
    this.onDeleteTask.emit(this.task);
  }
  
  onToggle(task?: Task) {
    this.onToggleReminder.emit(task);
  }
}
