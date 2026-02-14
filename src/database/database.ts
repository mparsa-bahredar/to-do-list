export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
}

const KEY = 'tasks';

export const getTasks = (): Task[] => {
  if (typeof window === 'undefined') return [];  
  const data = localStorage.getItem(KEY);
  return data ? (JSON.parse(data) as Task[]) : [];
};

export const saveTasks = (tasks: Task[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  }
};