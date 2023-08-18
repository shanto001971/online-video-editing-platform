import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/LayOut/LayOut";
import Home from "../Components/Home/Home";
import Templates from "../Components/Pages/Templates/Templates";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import DashboardPage from "../Components/LayOut/Dashboard/DashboardPage";
// import ErrorPage from './../Components/Pages/ErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        // errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/templates",
                element: <Templates />
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardPage />
    },
]);