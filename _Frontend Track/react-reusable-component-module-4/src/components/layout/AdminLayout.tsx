import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Container from "../UI/Container";

const AdminLayout = () => {
  return (
    <Container>
      <div className="flex">
        <div className="flex-[1]">
          <Sidebar />
        </div>
        <div className="flex-[5]">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default AdminLayout;
