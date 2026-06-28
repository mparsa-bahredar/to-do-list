import React, { useEffect, useState } from 'react'
import TaskTableTitle from './TaskTableTitle'
import TaskCard from './TaskCard'
import { Task } from '@/types/types';
import { useTranslations } from 'next-intl';
import Pagination from '@/components/common/Pagination';
import ShowNumber from '@/components/common/ShowNumber';
import { getTasks } from '@/database/database';

interface IProps{
  tasks: Task[];
  setTasks:React.Dispatch<React.SetStateAction<Task[]>>;
  activeTasks: Task[]
}

const ActiveTaskDataTable = ({tasks, setTasks, activeTasks}: IProps) => {

  const t = useTranslations("main");

  const [search, setSearch] = useState("");
  
  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTasks = activeTasks.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  const paginatedTasks = filteredTasks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className='flex flex-col gap-3 items-start'>
      <h3 className='font-semibold text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("activeTasks")}</h3>
      <div className='flex flex-col gap-3 w-full p-3 rounded-lg bg-[#F5F5F5]   dark:bg-[#0A2D49]'>
        <TaskTableTitle/>
        <div className='flex flex-col gap-2 w-full max-h-[160px] overflow-y-auto scrollbar'>
          {paginatedTasks.length === 0 ? (
            <div className='flex justify-center w-full h-16'>
              <p className='font-regular text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("thereIsNoTasks")}</p>
            </div>
          ) : (
            paginatedTasks.map((item) => (
              <TaskCard item={item} key={item.id} setTasks={setTasks}/>
            ))
          )}
        </div>
        <div className="flex justify-between items-center w-full">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          <ShowNumber itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setCurrentPage={setCurrentPage}/>
        </div>
      </div>
    </div>
  )
}

export default ActiveTaskDataTable

