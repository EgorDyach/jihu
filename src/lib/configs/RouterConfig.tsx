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
import { createRobotPath, editRobotPath } from "@modules/robotForms/constants";
import CreateRobotPage from "@modules/robotForms/CreateRobot";
import EditRobotPage from "@modules/robotForms/EditRobot";
import { PostsPage, postsPath } from "@modules/posts/PostsPage";
import { PostPage, postPath } from "@modules/post/PostPage";
import { createPostPath, editPostPath } from "@modules/postForms/constants";
import CreatePostPage from "@modules/postForms/CreatePost";
import { ScreenerPage, screenerPath } from "@modules/screener/ScreenerPage";
import { CryptoPage, cryptoPath } from "@modules/crypto/CryptoPage";
import EditPostPage from "@modules/postForms/EditPost";

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
        path: createRobotPath,
        element: <CreateRobotPage />,
      },
      {
        path: editRobotPath,
        element: <EditRobotPage />,
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
      {
        path: postsPath,
        element: <PostsPage />,
      },
      {
        path: postPath,
        element: <PostPage />,
      },
      {
        path: createPostPath,
        element: <CreatePostPage />,
      },
      {
        path: editPostPath,
        element: <EditPostPage />,
      },
      {
        path: screenerPath,
        element: <ScreenerPage />,
      },
      {
        path: cryptoPath,
        element: <CryptoPage />,
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
