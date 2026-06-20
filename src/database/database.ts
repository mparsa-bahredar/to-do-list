"use client"
import { Task } from "@/types/types";


const DEFAULT_CATEGORIES = [
  'Work',
  'Personal',
  'Study',
  'Health',
  'Shopping',
];


export const getTasks = (): Task[] => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('tasks') || '[]');
};
export const saveTasks = (tasks: Task[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
export const getCategories = (): string[] => {
  if (typeof window === 'undefined') return DEFAULT_CATEGORIES;
  const data = localStorage.getItem('categories');
  if (!data) localStorage.setItem('categories', JSON.stringify(DEFAULT_CATEGORIES));
  return JSON.parse(localStorage.getItem('categories')!);
};
export const saveCategories = (categories: string[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('categories', JSON.stringify(categories));
};