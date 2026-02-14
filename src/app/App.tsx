import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../Route/Route";

export default function App() {

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-[#F5F5F5]   dark:bg-gray-800'>
        <AppRoutes/>
      </div>
    </BrowserRouter>
  );
}