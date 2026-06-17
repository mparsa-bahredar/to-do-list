'use client'

import SearchFilter from "@/components/SearchFilter/SearchFilter";
import TaskList from "@/components/ActiveTaskList/ActiveTaskList";
import CompletedTaskList from "@/components/CompletedTaskList/CompletedTaskList";
import { useState, useEffect } from "react";
import { getTasks, type Task } from "@/database/database";

export default function App() {

  const [tasks, setTasks] = useState<Task[]>(getTasks());
  const [visibleTasks, setVisibleTasks] = useState<Task[]>(tasks);
  const [filters, setFilters] = useState<{search: string, priority: '' | 'High' | 'Medium' | 'Low', category: string, startTime?: number
  endTime?: number}>({search: '', priority: '', category: '',})

  
  useEffect(() => {
    const result = tasks.filter(task =>
      (!filters.search ||
        task.title.toLowerCase().includes(filters.search.toLowerCase())) &&

      (!filters.priority ||
        task.priority === filters.priority) &&

      (!filters.category ||
        task.category === filters.category) &&

      (
        filters.startTime === undefined &&
        filters.endTime === undefined
      ||
        (
          task.startTime !== undefined &&
          task.endTime !== undefined &&
          (filters.startTime === undefined || task.endTime >= filters.startTime) &&
          (filters.endTime === undefined || task.startTime <= filters.endTime)
        )
      )
    );
    setVisibleTasks(result);
  }, [tasks, filters]);
  

  const activeTasks = visibleTasks.filter(task => !task.completed);
  const completedTasks = visibleTasks.filter(task => task.completed);


  return (
    <div className="flex justify-center items-center w-full mt-8">
      <div className="flex flex-col items-center gap-4 rounded-xl">
        <h1 className="font-semibold text-[32px] text-[#1E88E5]">ToDoList</h1>
        <div className="flex flex-col gap-4 w-[960px] p-4 bg-[#FFFFFF] rounded-lg   dark:bg-gray-600">
          <SearchFilter setTasks={setTasks} filters={filters} setFilters={setFilters}/>
          <div className="w-full h-[1px] bg-[#E4E4E4] rounded-[48px]"></div>
          <TaskList setTasks={setTasks} activeTasks={activeTasks}/>
          <CompletedTaskList setTasks={setTasks} completedTasks={completedTasks}/>
        </div>
      </div>
    </div>
  );
}