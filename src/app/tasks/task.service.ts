import { Injectable } from '@angular/core';
import { Task } from '../model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);


  constructor(private http: HttpClient) {
    this.loadTasks();

  }

  private loadTasks() {
    this.http.get<Task[]>('/api/tasks')
      .subscribe((tasks) => this.tasks.next(tasks));
  }

  getTasks() {
    return this.tasks.asObservable();
  }

  addTask(task: Task) {
    return this.http
      .post<Task>('/api/tasks', task)
      .subscribe(() => this.loadTasks());
  }

  updateTask(task: Task) {
    return this.http
      .post(`/api/tasks/${task.id}`, task)
      .subscribe(() => this.loadTasks());
  }
}




