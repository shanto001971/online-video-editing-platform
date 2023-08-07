import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LayOut from "../Components/LayOut/LayOut";
import Home from "../Components/Home/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);