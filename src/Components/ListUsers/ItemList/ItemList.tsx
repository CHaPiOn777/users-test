import { FC, MouseEvent, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./ItemList.module.css";
import { TUser } from "../../../types/users-types";
import { Like } from "../../../img/Like";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toggleLike } from "../../../store/action-creator/ActionCreater";

const ItemList: FC<TUser> = ({ avatar, first_name, id, last_name }) => {
  const likes = useAppSelector((state) => state.usersReducer.likes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const changeLike = (e: MouseEvent) => {
    dispatch(toggleLike(id));
    e.preventDefault();
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
          <Like fill={likes && likes.includes(id) ? true : false} />
        </button>
      </li>
    </Link>
  );
};

export default ItemList;
