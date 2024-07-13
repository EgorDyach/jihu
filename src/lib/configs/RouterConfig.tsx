import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@layouts/mainLayout/MainLayout";
import { aboutPath } from "@modules/aboutPage/constants";
import { AboutPage } from "@modules/aboutPage/AboutPage";

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
]);
