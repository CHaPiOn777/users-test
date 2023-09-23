import React, { FC, MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./ItemList.module.css";
import { TUser } from "../../../types/users-types";
import { Like } from "../../../img/Like";

const ItemList: FC<TUser> = ({ avatar, email, first_name, id, last_name }) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  
  const changeLike = (e: MouseEvent) => {
    setIsLike(!isLike);
    e.preventDefault()
  };

  return (
    <Link to={`/${id}`} className={styles.link}>
      <li className={styles.itemList}>
        <img src={avatar} className={styles.avatar} alt="Avatar" />
        <p className={styles.name}>{`${first_name} ${last_name}`}</p>
        <button
          className={styles.btn}
          onClick={(e) => {
            changeLike(e);
          }}
        >
          <Like fill={isLike} />
        </button>
      </li>
    </Link>
  );
};

export default ItemList;
