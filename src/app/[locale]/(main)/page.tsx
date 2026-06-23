'use client'
import SearchFilter from "../../../modules/main/components/SearchFilter";
import ActiveTaskList from "../../../modules/main/components/ActiveTaskList";
import CompletedTaskList from "../../../modules/main/components/CompletedTaskList";
import { useState, useEffect, useMemo } from "react";
import { getTasks } from "@/database/database";
import { useTranslations } from "next-intl";
import { Task } from "@/types/types";


export default function App() {


  const t = useTranslations("mainPage")
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<{search: string, priority: '' | 'High' | 'Medium' | 'Low', category: string, 
  startTime?: number, endTime?: number}>({search: '', priority: '', category: ''})

  useEffect(() => {
    const loadedTasks = getTasks();
    setTasks(loadedTasks);
  }, []);

  const visibleTasks = 
    tasks.filter(task =>
      (!filters.search || task.title.toLowerCase().includes(filters.search.toLowerCase())) &&
      (!filters.priority || task.priority === filters.priority) &&
      (!filters.category || task.category === filters.category) &&
      (filters.startTime === undefined && filters.endTime === undefined ||
        (
          task.startTime !== undefined &&
          task.endTime !== undefined &&
          (filters.startTime === undefined || task.endTime >= filters.startTime) &&
          (filters.endTime === undefined || task.startTime <= filters.endTime)
        )
      )
    )

  const activeTasks = visibleTasks.filter(task => !task.completed)
  const completedTasks = visibleTasks.filter(task => task.completed)

  return (
    <div className="flex justify-center items-center w-full mt-8">
      <div className="flex flex-col items-center gap-4 rounded-xl">
        <h1 className="font-semibold text-[32px] text-[#2196F3]">{t("toDoList")}</h1>
        <div className="flex flex-col gap-4 w-[960px] p-4 bg-[#FFFFFF] rounded-lg   dark:bg-[#0D3C61]">
          <SearchFilter setTasks={setTasks} filters={filters} setFilters={setFilters}/>
          <div className="w-full h-[1px] bg-[#E4E4E4] rounded-[48px]   dark:bg-[#145A92]"></div>
          <ActiveTaskList setTasks={setTasks} activeTasks={activeTasks}/>
          <CompletedTaskList setTasks={setTasks} completedTasks={completedTasks}/>
        </div>
      </div>
    </div>
  );
}
