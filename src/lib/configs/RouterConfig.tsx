import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@layouts/mainLayout/MainLayout";
import { aboutPath } from "@modules/aboutPage/constants";
import { AboutPage } from "@modules/aboutPage/AboutPage";
import { shopPath } from "@modules/shopPage/constants";
import { ShopPage } from "@modules/shopPage/ShopPage";
import { ShopLayout } from "@layouts/shopLayout/ShopLayout";

export const appRoutersConfig = createBrowserRouter([
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
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        path: shopPath,
        element: <ShopPage />,
      },
    ],
  },
]);
