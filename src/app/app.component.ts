import { Component } from '@angular/core';
import { TaskService } from './tasks/task.service';
import { interval, from } from 'rxjs';
import { constructor } from 'q';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mastering Angular Components';
  o1 = interval(1000);
  o2 = from(['a', 'b']);



  constructor() {

  }

}
