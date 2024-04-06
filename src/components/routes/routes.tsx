import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Aboute from "../pages/Aboute";

const router = createBrowserRouter([
     {
          path: '/',
          element: <App/>,
          children:[
               {
                    index: true,
                    element: <Home></Home>
               },
               {
                    path: '/',
                    element: <Aboute/> 
               }
          ]
     }
])


export default router