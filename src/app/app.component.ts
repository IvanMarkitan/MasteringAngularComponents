import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, User } from './model';
import { ProjectService } from './project/project.service';
import { map } from 'rxjs/operators';
import { UserService } from './user/user.service';
import { TaskService } from './tasks/task.service';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Mastering Angular Components';
  projects: Observable<Project[]>;
  selectedProject: Observable<Project>;
  openTasksCount: Observable<number>;
  user: Observable<User>;

  constructor(private projectService: ProjectService, private taskListService: TaskService, private userService: UserService) {
    this.projects = projectService.getProjects();
    this.selectedProject = this.projectService.getSelectedProject();
    this.openTasksCount = this.getOpenTasks();
    this.user = userService.getCurrentUser();

  }

  // selectProject(id: number) {
  //   this.projectService.selectProject(id);
  // }

  getOpenTasks(): Observable<number> {
    return this.taskListService.getTasks().pipe(
      map(tasks => tasks.filter(task => !task.done).length));
  }

}
