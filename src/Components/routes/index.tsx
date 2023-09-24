import { RouteObject, createBrowserRouter, createHashRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Error/ErrorPage";
import SignUp from "../../pages/signUp/SignUp";
import RequireAuth from "../RequireAuth/RequireAuth";
import UserInfo from "../../pages/user-details/UserInfo";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RequireAuth>
        <Root />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/:userId",
    element: (
      <RequireAuth>
        <UserInfo />
      </RequireAuth>
    ),
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
];

export const router = createHashRouter(routes);
