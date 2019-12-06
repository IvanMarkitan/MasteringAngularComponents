import { Component } from '@angular/core';
import { TaskService } from './tasks/task.service';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mastering Angular Components';

  constructor() {

  }

}
