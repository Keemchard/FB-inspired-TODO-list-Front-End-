import { Component, OnInit } from '@angular/core';
import { taskInterface } from './task-interface';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskVariable: taskInterface[] = [];
  title = 'angularTodo';
  constructor(private taskServiceObj: TaskService) {}

  ngOnInit(): void {}

  addTask(taskToBeAdded: taskInterface) {
    this.taskServiceObj
      .addTaskFromService(taskToBeAdded)
      .subscribe(() => this.taskVariable.push(taskToBeAdded));
  }
}
