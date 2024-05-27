import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/addProduct/AddProduct";
import UpdateAProduct from "../pages/updateAProduct/UpdateAProduct";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/add-product',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/update-product',
            element:<UpdateAProduct></UpdateAProduct>
        }
      ]
    },
  ]);