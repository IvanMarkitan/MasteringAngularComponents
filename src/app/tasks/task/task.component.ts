import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from "@angular/core";
import { Task } from "src/app/model";

@Component({
  selector: "mac-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() outUpdateTask = new EventEmitter<Task>();

  @HostBinding("class.done")
  get done() {
    return this.task && this.task.done;
  }

  onDone(done: boolean) {
    this.task.done = done;
    this.updateTask();
  }

  onSave(title: string) {
    this.task.title = title;
    this.updateTask();
  }
  updateTask() {
    this.outUpdateTask.emit({
      ...this.task
    });
  }
  ngOnInit() { }
}
