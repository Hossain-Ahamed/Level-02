import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";

import About from "@/pages/About/About";
import Home from "@/pages/Home/Home";
import AdminLayout from "@/components/layouts/AdminLayout";
import Dashboard from "@/pages/Admin/Dashboard";
import ServiceList from "@/pages/Admin/ServiceList";
import AddService from "@/pages/Admin/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path : '/admin',
    element : <AdminLayout/>,
    children : [
      {
        index : true,
        element : <Navigate to='dashboard'/>
      },
      {
        path : 'dashboard',
        element : <Dashboard/>
      },
      {
        path : 'service-list',
        element : <ServiceList/>
      },
      {
        path : 'add-service',
        element : <AddService/>
      }
    ]
  }
]);

export default router;
