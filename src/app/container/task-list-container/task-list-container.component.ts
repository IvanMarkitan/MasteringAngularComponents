import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../../tasks/task.service';
import { Task, TaskListFilterType, Project } from '../../model';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { ProjectService } from 'src/app/project/project.service';

@Component({
  selector: 'mac-task-list-container',
  templateUrl: './task-list-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListContainerComponent {
  tasks: Observable<Task[]>;
  filteredTasks: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done', 'none'];
  activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');
  selectedProject: Observable<Project>;

  constructor(private taskService: TaskService, private projectService: ProjectService) {

    this.selectedProject = this.projectService.getSelectedProject();

    this.tasks = this.selectedProject.pipe(
      switchMap((project) => this.taskService.getProjectTasks(project.id))
    );

    this.filteredTasks = combineLatest(this.tasks, this.activeTaskFilterType)
      .pipe(
        map(([tasks, activeTaskFilterType]) => {
          return tasks.filter((task) => {

            if (activeTaskFilterType === "all") {
              return true;
            } else if (activeTaskFilterType === "open") {
              return !task.done;
            } else if (activeTaskFilterType === "done") {
              return task.done;
            } else {
              return false;
            }
          });
        })
      );
  }

  activateFilterType(type: TaskListFilterType) {
    this.activeTaskFilterType.next(type);
  }

  addTask(title: string) {

    this.selectedProject
      .pipe(take(1))
      .subscribe((proj) => {
        const task: Task = {
          projectId: proj.id, title, done: false
        };
        this.taskService.addTask(task);
      });



    // const task: Task = {
    //   title, done: false
    // };
    // this.taskService.addTask(task);
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
  }
}
