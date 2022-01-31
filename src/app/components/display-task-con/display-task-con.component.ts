import { Component, OnInit } from '@angular/core';
import { taskArray } from 'src/app/mock-task';
import { taskInterface } from 'src/app/task-interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-display-task-con',
  templateUrl: './display-task-con.component.html',
  styleUrls: ['./display-task-con.component.css'],
})
export class DisplayTaskConComponent implements OnInit {
  taskVariable: taskInterface[] = [];
  constructor(private taskServiceObj: TaskService) {}

  ngOnInit(): void {
    this.taskServiceObj
      .getTaskFromService()
      .subscribe((t) => (this.taskVariable = t));
  }

  deleteTask(taskToBeDeleted: taskInterface) {
    this.taskServiceObj
      .deleteTaskFromService(taskToBeDeleted)
      .subscribe(
        () =>
          (this.taskVariable = this.taskVariable.filter(
            (t) => t.id !== taskToBeDeleted.id
          ))
      );
  }
}
