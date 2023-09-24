import { useAppSelector } from "../../hooks/redux";
import ListUsers from "../../pages/list-users/ListUsers";
import Loader from "../Loader/Loader";

const Root = () => {
  const { isLoading, error } = useAppSelector((state) => state.usersReducer);

  if (isLoading)
    return (
      <Loader />
    );

  if (error)
    return (
      <p
        style={{
          fontSize: "56px",
        }}
      >
        {error}
      </p>
    );
  return <ListUsers />;
};

export default Root;
