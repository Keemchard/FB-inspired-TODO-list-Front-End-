import { Injectable } from '@angular/core';
import { taskInterface } from '../task-interface';
import { taskArray } from '../mock-task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTaskFromService(): Observable<taskInterface[]> {
    return this.http.get<taskInterface[]>(this.apiUrl);
  }

  deleteTaskFromService(task: taskInterface): Observable<taskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<taskInterface>(url);
  }

  addTaskFromService(task: taskInterface): Observable<taskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.post<taskInterface>(this.apiUrl, task, httpOptions);
  }
}
