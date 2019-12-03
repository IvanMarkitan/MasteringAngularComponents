import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "mac-enter-task",
  templateUrl: "./enter-task.component.html",
  styleUrls: ["./enter-task.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class EnterTaskComponent implements OnInit {
  @Output() outEnterTask = new EventEmitter<string>();

  enterTask(titleInput: HTMLInputElement) {
    this.outEnterTask.emit(titleInput.value);
    titleInput.value = "";
    titleInput.focus();
  }

  pressed(event: KeyboardEvent, input: any) {
    // tslint:disable-next-line: triple-equals
    if (event.code == "13") {
      this.enterTask(input);
    }
  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }
}
