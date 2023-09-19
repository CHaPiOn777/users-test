import React, {FC, useState} from "react";
import styles from './ItemList.module.css';
import { TUser } from "../../../types/users-types";
import { Like } from "../../../img/Like";


const ItemList: FC<TUser> = ({avatar, email, first_name, id, last_name}) => {
  const [isLike, setIsLike] = useState<boolean>(false);

  return (
    <li className={styles.itemList} >
      <img src={avatar} className={styles.avatar} alt="Avatar" />
      <p className={styles.name}>{`${first_name} ${last_name}`}</p>
      <button className={styles.btn} onClick={() => setIsLike(!isLike)}>
        <Like fill={isLike} />
      </button>
    </li>
  );
};

export default ItemList;
