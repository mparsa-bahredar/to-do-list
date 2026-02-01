import SearchFilter from "@/components/SearchFilter/SearchFilter";
import TaskList from "@/components/TaskList/TaskList";


export default function App() {
  return (
    <div className="flex justify-center items-center w-full mt-16">
      <div className="flex flex-col items-center gap-4 p-8 bg-[#F5F5F5] rounded-xl">
        <h1 className="text-[32px] text-blue-800">ToDoList</h1>
        <div className="flex flex-col p-4 bg-[#FFFFFF] rounded-lg">
          <SearchFilter/>
          <TaskList/> 
        </div>
      </div>
    </div>
  );
}
