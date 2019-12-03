import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Task, TaskListFilterType } from "src/app/model";
import { TaskService } from "../task.service";

@Component({
  selector: "mac-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  filteredTasks: Task[];
  taskFilterTypes: TaskListFilterType[] = ["all", "open", "done", "none"];
  activeTaskFilterType: TaskListFilterType = "done";

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
    this.filterTasks();
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  activateFilterType(type: TaskListFilterType) {
    this.activeTaskFilterType = type;
    this.filterTasks();
  }

  filterTasks() {
    let start = 0;
    this.filteredTasks = this.tasks.filter((task: Task) => {
      if (this.activeTaskFilterType === "all") {
        return true;
      } else if (this.activeTaskFilterType === "open") {
        return !task.done;
      } else if (this.activeTaskFilterType === "done") {
        return task.done;
      } else {
        return false;
      }
    });
  }

  ngOnInit() {}
}
