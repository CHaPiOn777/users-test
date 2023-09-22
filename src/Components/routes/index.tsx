import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../App/App';
import Root from '../Root/Root';
import ErrorPage from '../Error/ErrorPage';
import UserInfo from '../UserInfo/UserInfo';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:userId",
    element: <UserInfo />,
  },
];

export const router = createBrowserRouter(routes);
