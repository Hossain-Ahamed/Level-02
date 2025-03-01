import React from "react";
import { NavLink } from "react-router";

const AdminSidebar = () => {
  return (
    <aside className="bg-light-gray col-span-1 lg:col-span-2  h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col items-start ">
        <NavLink className='sidebar' to='/admin'>Dashboard</NavLink>
        <NavLink to='/admin/add-service'>Add service</NavLink>
        <NavLink to='/admin/service'>Service list</NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
