import React, { SetStateAction, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { Like } from "../../img/Like";
import styles from "./ListUsers.module.css";
import ItemList from "./ItemList/ItemList";
import Pagination from "../Pagination/Pagination";
import HeaderMain from "./HeaderMain/HeaderMain";

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
              <Link to={`/${user.id}`} className={styles.link}>
                <ItemList
                  key={index}
                  id={user.id}
                  email={user.email}
                  first_name={user.first_name}
                  last_name={user.last_name}
                  avatar={user.avatar}
                />
              </Link>
            ))}
        </ul>
        <Pagination totalUsers={users.length} paginate={paginate} />
      </main>
    </>
  );
};

export default ListUsers;
