import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { taskInterface } from 'src/app/task-interface';

@Component({
  selector: 'app-add-task-con',
  templateUrl: './add-task-con.component.html',
  styleUrls: ['./add-task-con.component.css'],
})
export class AddTaskConComponent implements OnInit {
  @Output() addTask: EventEmitter<taskInterface> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.text);
    // console.log(this.day);
    // console.log(this.reminder);
    let textInput: HTMLInputElement = document.querySelector('#text');
    let dayInput: HTMLInputElement = document.querySelector('#day');
    let reminderInput: HTMLInputElement = document.querySelector('#reminder');

    if (
      textInput.value == '' ||
      dayInput.value == '' ||
      reminderInput.value == ''
    ) {
      alert('Please fill up the form');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.addTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

    document.location.reload();
  }
}
