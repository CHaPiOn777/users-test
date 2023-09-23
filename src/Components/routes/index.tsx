import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import Root from "../Root/Root";
import ErrorPage from "../Error/ErrorPage";
import UserInfo from "../UserInfo/UserInfo";
import SignUp from "../../pages/signUp/SignUp";
import RequireAuth from "../RequireAuth/RequireAuth";

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

export const router = createBrowserRouter(routes);
