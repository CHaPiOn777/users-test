import { useAppSelector } from "../../hooks/redux";
import HeaderUser from "../../Components/UserInfo/HeaderUser/HeaderUser";
import DescriptionUser from "../../Components/UserInfo/DescriptionUser/DescriptionUser";
import Loader from "../../Components/Loader/Loader";

const UserInfo = () => {
  const { userById, users } = useAppSelector((state) => state.usersReducer);
  
  return userById && users.length > 0 ? (
    <>
      <HeaderUser />
      <DescriptionUser />
    </>
  ) : (
    <Loader />
  );
};

export default UserInfo;
