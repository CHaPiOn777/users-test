import { SetStateAction, useMemo, useState } from "react";

import { useAppSelector } from "../../hooks/redux";
import styles from "./ListUsers.module.css";
import HeaderMain from "../../Components/ListUsers/HeaderMain/HeaderMain";
import ItemList from "../../Components/ListUsers/ItemList/ItemList";
import Pagination from "../../Components/Pagination/Pagination";

const ListUsers = () => {
  const { users } = useAppSelector((state) => state.usersReducer);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const sizeWindow = localStorage.getItem("size");
  const counterUsersInPage = sizeWindow === "small" ? 4 : 6;

  const lastUserPages = currentPage * counterUsersInPage;
  const firstUserPage = lastUserPages - counterUsersInPage;

  const currentUsers = useMemo(() => {
    return users.slice(firstUserPage, lastUserPages);
  }, [currentPage, lastUserPages, users]);

  const paginate = (currentPage: SetStateAction<number>) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <HeaderMain />
      <main className={styles.main}>
        <ul className={styles.list}>
          {users &&
            currentUsers.map((user, index) => (
              <ItemList
                key={index}
                id={user.id}
                email={user.email}
                first_name={user.first_name}
                last_name={user.last_name}
                avatar={user.avatar}
              />
            ))}
        </ul>
        <Pagination totalUsers={users.length} paginate={paginate} />
      </main>
    </>
  );
};

export default ListUsers;
