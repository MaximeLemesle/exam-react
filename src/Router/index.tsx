import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import PageTemplate from "../pages/PageTemplate";
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import PostDetailPage from "../pages/PostDetailPage";
import PostOwnerPage from "../pages/PostOwnerPage";
import Page404 from "../pages/Page404";
import { PostContextProvider } from "../contexts/PostContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "posts/:postId",
        element: (
          <PostContextProvider>
            <PostPage />
          </PostContextProvider>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="detail" replace />,
          },
          {
            path: "detail",
            index: true,
            element: <PostDetailPage />,
          },
          {
            path: "owner/:userId",
            element: <PostOwnerPage />,
          },
        ],
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
