import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../model';


@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects = new BehaviorSubject<Project[]>([]);
  private selectedProjectId = new BehaviorSubject<number>(1);
  private selectedProject: Observable<Project>;

  constructor(private http: HttpClient) {
    this.loadProjects();
    this.selectedProject = combineLatest(this.projects, this.selectedProjectId)
      .pipe(
        map(([projects, selectedProjectId]) =>
          projects.find((project) => project.id === selectedProjectId)
        )
      );
  }

  private loadProjects() {
    this.http.get<Project[]>('/api/projects')
      .subscribe((projects) => this.projects.next(projects));
  }

  selectProject(id: number) {
    this.selectedProjectId.next(id);
  }

  getSelectedProject() {
    return this.selectedProject;
  }
  getProjects(): Observable<Project[]> {
    return this.projects;
  }
  updateProject(project: Project): void {
    this.http.post<Project>(`/api/projects/${project.id}`, project)
      .subscribe(() => this.loadProjects());
  }

}
