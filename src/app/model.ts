export interface Task {
  id?: number;
  readonly projectId?: number;
  title: string;
  done: boolean;
}

export type TaskListFilterType = 'all' | 'open' | 'done' | 'none';

export interface Project {
  readonly id?: number;
  readonly title: string;
  readonly description: string;
  readonly comments: Comment[];

}

export interface Tab {
  readonly id: any;
  readonly title: string;
}

export interface User {
  readonly id?: number;
  readonly name: string;
  readonly pictureUrl: string;
}

export interface Comment {
  readonly time: number;
  readonly user: User;
  readonly content: string;
}

export interface CommentUpdate {
  readonly index: number;
  readonly comment: Comment;
}

export type ActivityAlignment = 'left' | 'right';

export interface ActivitySliderSelection {
  start: number;
  end: number;
}

export interface ActivityBase {
  kind: string;
  id?: number;
  user: User;
  time: number;
  category: string;
  title: string;
  message: string;
}

export interface ProjectActivity extends ActivityBase {
  kind: 'project';
  projectId: number;
}

export type Activity = ProjectActivity;

export interface Tag {
  type: string;
  hashTag: string;
  title: string;
  link: string;
}
