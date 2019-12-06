import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Task, TaskListFilterType } from "src/app/model";
import { Observable } from 'rxjs';

@Component({
  selector: "mac-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  @Input() taskFilterTypes: TaskListFilterType[];
  @Input() activeTaskFilterType: TaskListFilterType;
  @Input() tasks: Task[];
  @Output() outAddTask = new EventEmitter<string>();
  @Output() outActivateFilterType = new EventEmitter<TaskListFilterType>();
  @Output() outUpdateTask = new EventEmitter<Task>();

  addTask(title: string) {
    this.outAddTask.emit(title);
  }

  updateTask(task: Task) {
    this.outUpdateTask.emit(task);
  }

  activateFilterType(tlfType: TaskListFilterType) {
    this.outActivateFilterType.emit(tlfType);
  }


  ngOnInit() { }
}
