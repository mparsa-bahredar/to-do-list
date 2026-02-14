import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Landing from "../pages/Landing/Landing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Landing/>}/>       
      </Route>
    </Routes>
  );
};

export default AppRoutes;
