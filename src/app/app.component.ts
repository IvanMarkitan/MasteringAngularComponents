import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './model';
import { ProjectService } from './project/project.service';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mastering Angular Components';
  projects: Observable<Project[]>;
  selectedProject: Observable<Project>;

  constructor(private projectService: ProjectService) {
    this.projects = projectService.getProjects();
    this.selectedProject = this.projectService.getSelectedProject();
  }

  selectProject(id: number) {
    this.projectService.selectProject(id);
  }

}
