
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet />
      
    </div>
  );
};

export default MainLayout;
