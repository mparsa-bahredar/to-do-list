import { useState, useEffect } from 'react';
import { type Task, getTasks } from '../../database/database';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import ActiveTaskList from '../../components/ActiveTaskList/ActiveTaskList';
import CompletedTaskList from '../../components/CompletedTaskList/CompletedTaskList';


const Landing = () => {

    
  const [tasks, setTasks] = useState<Task[]>(getTasks());
  const [visibleTasks, setVisibleTasks] = useState<Task[]>(tasks);
  const [filters, setFilters] = useState({
    search: '',
    priority: '' as '' | 'High' | 'Medium' | 'Low'
  });


  useEffect(() => {
    let result = tasks;
    if (filters.search) {
      result = result.filter(task =>
        task.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.priority) {
      result = result.filter(task =>
        task.priority === filters.priority
      );
    }
    setVisibleTasks(result);
  }, [tasks, filters]);
  

  const activeTasks = visibleTasks.filter(task => !task.completed);
  const completedTasks = visibleTasks.filter(task => task.completed);

  return (
    <div className="flex justify-center items-center w-full mt-16">
      <div className="flex flex-col items-center gap-4 rounded-xl">
        <h1 className="font-semibold text-[32px] text-[#1E88E5]">ToDoList</h1>
        <div className="flex flex-col gap-4 p-4 bg-[#FFFFFF] rounded-lg   dark:bg-gray-600">
          <SearchFilter setTasks={setTasks} filters={filters} setFilters={setFilters}/>
          <div className="w-full h-[1px] bg-[#E4E4E4] rounded-[48px]"></div>
          <ActiveTaskList setTasks={setTasks} activeTasks={activeTasks}/>
          <CompletedTaskList setTasks={setTasks} completedTasks={completedTasks}/>
        </div>
      </div>
    </div>
  )
}

export default Landing