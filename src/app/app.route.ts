import { Routes } from '@angular/router';
import { ProjectContainerComponent } from './container/project-container/project-container.component';
import { TaskListContainerComponent } from './container/task-list-container/task-list-container.component';
import { ProjectCommentsContainerComponent } from './container/project-comments-container/project-comments-container.component';
import { ProjectContainerGuard } from './guards/project-container.guard';
import { ProjectActivitiesContainerComponent } from './container/project-activities-container/project-activities-container.component';

export const appRoutes: Routes = [
  {
    path: 'projects/:projectId',
    component: ProjectContainerComponent,
    canActivate: [ProjectContainerGuard],
    children: [

      {

        path: 'tasks',
        component: TaskListContainerComponent
      },
      {
        path: 'comments',
        component: ProjectCommentsContainerComponent
      }, {
        path: 'activities',
        component: ProjectActivitiesContainerComponent
      },

      {
        path: '**',
        redirectTo: 'tasks'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/projects/1/tasks'
  }
];
