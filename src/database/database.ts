import { Category, Task } from "@/types/types";

const getDefaultCategories = (locale: string) => [
  {id:1, title: locale === "en" ? "Work" : "کاری"},
  {id:2, title: locale === "en" ? "Personal" : "شخصی"},
  {id:3, title: locale === "en" ? "Study" : "یادگیری"},
  {id:4, title: locale === "en" ? "Health" : "سلامتی"},
  {id:5, title: locale === "en" ? "Shopping" : "خرید"}
];

export const getTasks = (): Task[] => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('tasks') || '[]');
};

export const saveTasks = (tasks: Task[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getCategories = (): Category[] => {
  if (typeof window === 'undefined') return getDefaultCategories('en');
  const locale = localStorage.getItem('locale') || 'en';
  const data = localStorage.getItem('categories');
  if (!data) {
    const defaults = getDefaultCategories(locale);
    localStorage.setItem('categories', JSON.stringify(defaults));
    return defaults;
  }
  return JSON.parse(data);
};

export const saveCategories = (categories: Category[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('categories', JSON.stringify(categories));
};