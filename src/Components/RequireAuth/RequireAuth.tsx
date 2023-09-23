import { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";

type TRequireAuth = {
  children: ReactElement;
};

const RequireAuth: FC<TRequireAuth> = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/signUp" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
