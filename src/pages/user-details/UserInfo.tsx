import { useAppSelector } from "../../hooks/redux";
import HeaderUser from "../../Components/UserInfo/HeaderUser/HeaderUser";
import DescriptionUser from "../../Components/UserInfo/DescriptionUser/DescriptionUser";

const UserInfo = () => {
  const userById = useAppSelector((state) => state.usersReducer.userById);
  return (
    userById && (
      <>
        <HeaderUser />
        <DescriptionUser />
      </>
    )
  );
};

export default UserInfo;
