import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/LayOut/LayOut";
import Home from "../Components/Home/Home";
import Templates from "../Components/Pages/Templates/Templates";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Dashboard from "../Components/LayOut/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
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
<<<<<<< HEAD
    }
=======
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
>>>>>>> origin/diljahanToyshi
]);