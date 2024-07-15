import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@layouts/mainLayout/MainLayout";
import { aboutPath } from "@modules/aboutPage/constants";
import { AboutPage } from "@modules/aboutPage/AboutPage";
import { ShopPage } from "@modules/shopPage/ShopPage";
import { ShopLayout } from "@layouts/shopLayout/ShopLayout";
import PageNotFound from "@modules/pageNotFound/PageNotFound";
import { RobotPage, robotPath } from "@modules/robotPage/RobotPage";
import { CartPage, cartPath } from "@modules/cartPage/CartPage";
import {
  AdminLoginPage,
  AdminLoginPath,
} from "@modules/adminPage/AdminLoginPage";

export const appRoutersConfig = createBrowserRouter([
  {
    path: "/",
    element: <ShopLayout />,
    errorElement: (
      <MainLayout>
        <PageNotFound />
      </MainLayout>
    ),
    children: [
      {
        path: "",
        element: <ShopPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: robotPath,
        element: <RobotPage />,
      },
      {
        path: cartPath,
        element: <CartPage />,
      },
      {
        path: AdminLoginPath,
        element: <AdminLoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: aboutPath,
        element: <AboutPage />,
      },
    ],
  },
]);
