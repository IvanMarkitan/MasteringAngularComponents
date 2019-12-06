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
}
