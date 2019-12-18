import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskComponent } from './tasks/task/task.component';
import { EnterTaskComponent } from './tasks/enter-task/enter-task.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import { ToggleComponent } from './ui/toggle/toggle.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Database } from './database';
import { TaskListContainerComponent } from './container/task-list-container/task-list-container.component';
import { ProjectContainerComponent } from './container/project-container/project-container.component';
import { TabsComponent } from './ui/tabs/tabs/tabs.component';
import { ProjectComponent } from './project/project/project.component';
import { NavigationItemComponent } from './ui/navigation-item/navigation-item.component';
import { NavigationSectionComponent } from './ui/navigation-section/navigation-section.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { EditorComponent } from './ui/editor/editor.component';
import { ProfilePictureComponent } from './user/profile-picture/profile-picture.component';
import { UserAreaComponent } from './user/user-area/user-area.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentsComponent } from './comments/comments/comments.component';
import { ProjectCommentsContainerComponent } from './container/project-comments-container/project-comments-container.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { ActivitySliderComponent } from './activities/activity-slider/activity-slider.component';
import { ActivityComponent } from './activities/activity/activity.component';
import { ActivitiesComponent } from './activities/activities/activities.component';
import { ProjectActivitiesContainerComponent } from './container/project-activities-container/project-activities-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent,
    ToggleComponent,
    TaskListContainerComponent,
    ProjectComponent,
    ProjectContainerComponent,
    TabsComponent,
    NavigationItemComponent,
    NavigationSectionComponent,
    NavigationComponent,
    EditorComponent,
    ProfilePictureComponent,
    UserAreaComponent,
    FromNowPipe,
    CommentComponent,
    CommentsComponent,
    ProjectCommentsContainerComponent,
    ActivitySliderComponent,
    ActivityComponent,
    ActivitiesComponent,
    ProjectActivitiesContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, { delay: 0 }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
