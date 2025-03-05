import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { generateRoutes } from "../utils/routesGenerator";
import { FacultyPaths } from "./faculty.routes";
import { StudentPaths } from "./student.routes";
import { adminPaths } from "./admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: generateRoutes(adminPaths),
  },
  {
      path : '/faculty',
      element : <App/>,
      children : generateRoutes(FacultyPaths)
  },
  {
      path : '/student',
      element : <App/>,
      children : generateRoutes(StudentPaths)
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
