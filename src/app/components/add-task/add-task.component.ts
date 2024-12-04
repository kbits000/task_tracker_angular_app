import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<any> = new EventEmitter<Task>();

  taskForm = new FormGroup({
    name: new FormControl('', Validators.required),
    dayAndTime: new FormControl('', Validators.required),
    reminder: new FormControl(false)
  });

  showAddTask?: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  onSubmit() {
    if (this.taskForm.controls.name.value?.length === 0 || this.taskForm.controls.dayAndTime.value?.length === 0) { // check if there is a problem
      alert('Please add a task!');
      return;
    }
    const newTask = {
      text: this.taskForm.controls.name.value,
      day: this.taskForm.controls.dayAndTime.value,
      reminder: this.taskForm.controls.reminder.value
    }
    
    this.onAddTask.emit(newTask);

  }
}
