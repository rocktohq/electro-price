import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://dummyjson.com/products"),
        element: <Home></Home>
      },
      {
        path: "/products",
        loader: () => fetch("https://dummyjson.com/products"),
        element: <Products></Products>
      },
      {
        path: "/products/:productId",
        loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.productId}`),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>
          },
          {
            path: "/dashboard/editprofile",
            element: <EditProfile></EditProfile>
          }
        ]
      }
    ]
  }
]);

export default router;