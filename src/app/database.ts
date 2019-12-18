import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task, Project, User, Activity } from './model';

export class Database implements InMemoryDbService {

  createDb() {

    const users: User[] = [
      { id: 1, name: 'Jason', pictureUrl: '/assets/ProfilePicture.png' }
    ];
    const projects: Project[] = [
      { id: 1, title: 'My first project', description: 'This is your first project.',
      comments: [{ content: 'My first comment', time: Date.now(), user: users[0] }] },
      { id: 2, title: 'My second project', description: 'This is your second project.', comments: [] }
      , { id: 3, title: 'My third project', description: 'This is your third project.', comments: [] }

    ];

    const tasks: Task[] = [
      { id: 1, projectId: 1, title: 'Task 1', done: false },
      { id: 2, projectId: 1, title: 'Task 2', done: false },
      { id: 3, projectId: 1, title: 'Task 3', done: true },
      { id: 4, projectId: 2, title: 'Task 4', done: false },
      { id: 5, projectId: 1, title: 'Task 5', done: false },
      { id: 6, projectId: 1, title: 'Task 6', done: true },
      { id: 7, projectId: 2, title: 'Task 7', done: true },
      { id: 8, projectId: 1, title: 'Task 8', done: false },
      { id: 9, projectId: 3, title: 'Task 9', done: false },
      { id: 10, projectId: 3, title: 'Task 10', done: false }
    ];

    const now = +new Date();

    const activities: Activity[] = [{
      id: 1,
      kind: 'project',
      user: users[0],
      time: now - 1000 * 60 * 60 * 7,
      projectId: 1,
      category: 'tasks',
      title: 'A task was updated',
      message: 'The task \'Task 1\' was updated on #project-1.'
    }, {
      id: 2,
      kind: 'project',
      user: users[0],
      time: now - 1000 * 60 * 60 * 5,
      projectId: 1,
      category: 'tasks',
      title: 'A task was updated',
      message: 'The task \'Task 1\' was updated on #project-2.'
    }, {
      id: 3,
      kind: 'project',
      user: users[0],
      time: now - 1000 * 60 * 60 * 1,
      projectId: 1,
      category: 'tasks',
      title: 'A task was updated',
      message: 'The task \'Task 2\' was updated on #project-2.'
    }];

    return { users, projects, tasks, activities };
  }
}
