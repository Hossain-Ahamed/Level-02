import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import { adminRoutes } from "./admin.routes";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
    },
    {
        path : '/admin',
        element : <App/>,
        children : adminRoutes
    },
    // {
    //     path : '/faculty',
    //     element : <App/>,
    //     children : adminRoutes
    // },
    {
        path : '/admin',
        element : <App/>,
        children : adminRoutes
    },

    {
        path : '/login',
        element :<Login/>
    },
    {
        path : '/register',
        element :<Register/>
    },
])