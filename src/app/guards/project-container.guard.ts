import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectService } from '../project/project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectContainerGuard implements CanActivate {
  constructor(private projectService: ProjectService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot) {
    console.log(next);
    return this.projectService.getProjects()
      .pipe(
        map(projects => {
          const projectExists = !!projects.find(project => project.id === +next.params.projectId);
          if (!projectExists) {
            this.router.navigate(['/projects', projects[0].id]);
          }
          return projectExists;
        })
      );
  }

}
