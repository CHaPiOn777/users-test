import { FC, ReactElement, ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";

type TRequireAuth = {
  children: ReactElement;
};

const RequireAuth: FC<TRequireAuth> = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  console.log(token)
  if (!token) {
    return <Navigate to="/signUp" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
