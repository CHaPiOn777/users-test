import { useAppSelector } from "../../hooks/redux";
import ListUsers from "../../pages/list-users/ListUsers";

const Root = () => {
  const { isLoading, error } = useAppSelector((state) => state.usersReducer);

  if (isLoading)
    return (
      <p
        style={{
          fontSize: "56px",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        Загрузка...
      </p>
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
