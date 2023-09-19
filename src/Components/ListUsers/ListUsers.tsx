import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Like } from "../../img/Like";
import styles from "./ListUsers.module.css";
import ItemList from "./ItemList/ItemList";

const ListUsers = () => {
  const { users } = useAppSelector((state) => state.usersReducer);

  return (
    <main>
      <ul className={styles.list}>
        {users &&
          users.map((user, index) => (
            <ItemList
              key={index}
              id={user.id}
              email={user.email}
              first_name={user.first_name}
              last_name={user.last_name}
              avatar={user.avatar}
            ></ItemList>
          ))}
      </ul>
    </main>
  );
};

export default ListUsers;
