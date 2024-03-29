import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProjectService } from '../../project/project.service';
import { UserService } from '../../user/user.service';
import { Observable, combineLatest } from 'rxjs';
import { Comment, CommentUpdate, Project, User } from '../../model';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mac-project-comments-container',
  templateUrl: './project-comments-container.component.html',
  styleUrls: ['./project-comments-container.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCommentsContainerComponent {
  user: Observable<User>;
  selectedProject: Observable<Project>;
  projectComments: Observable<Comment[]>;

  constructor(private projectService: ProjectService, private userService: UserService, private route: ActivatedRoute) {
    this.user = userService.getCurrentUser();

    this.selectedProject = combineLatest(projectService.getProjects(), route.parent.params).pipe(
      map(([projects, routeParams]) => projects.find(project => project.id === +routeParams.projectId))
    )

    this.projectComments = this.selectedProject
      .pipe(
        map((project) => project.comments)
      );
  }

  createComment(comment: Comment) {
    this.selectedProject
      .pipe(
        take(1)
      )
      .subscribe((project) => this.projectService.updateProject({
        ...project,
        comments: [...project.comments, comment]
      }));
  }

  updateComment(update: CommentUpdate) {
    this.selectedProject
      .pipe(
        take(1)
      )
      .subscribe((project) => {
        const updatedComments = project.comments.slice();
        updatedComments[update.index] = update.comment;
        this.projectService.updateProject({
          ...project,
          comments: updatedComments
        });
      });
  }
}
