import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Task, TaskListFilterType } from "src/app/model";
import { TaskService } from "../task.service";
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: "mac-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks: Observable<Task[]>;
  filteredTasks: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ["all", "open", "done", "none"];
  activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
    this.filterTasks();
  }

  addTask(title: string) {
    const task: Task = {
      title,
      done: false
    };
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
  }

  activateFilterType(typeName: TaskListFilterType) {
    this.activeTaskFilterType.next(typeName);
  }

  filterTasks() {
    let start = 0;
    this.filteredTasks = combineLatest([this.tasks, this.activeTaskFilterType])
      .pipe(
        map(([tasks, activateFilterType]) => {
          return tasks.filter((task) => {
            if (activateFilterType === "all") {
              return true;
            } else if (activateFilterType === "open") {
              return !task.done;
            } else if (activateFilterType === "done") {
              return task.done;
            } else {
              return false;
            }
          });

        }));
  }

  ngOnInit() { }
}
