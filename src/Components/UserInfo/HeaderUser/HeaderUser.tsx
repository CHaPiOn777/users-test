import { useEffect } from "react";
import Button from "../../Button/ButtonExit/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {UsersSlice} from "../../../store/reducers/UsersSlice";
import styles from './HeaderUser.module.css';
import { putchAvatar } from "../../../store/action-creator/ActionCreater";

const HeaderUser = () => {
  const { userById, users } = useAppSelector((state) => state.usersReducer);
  const { filterUserById } = UsersSlice.actions;
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterUserById(Number(userId)));
  }, [users]);

  return (
    <header className={styles.header}>
      <Button
        type={"Назад"}
        className={styles.btn}
      />
      <div className={styles.user}>
        <img src={userById.avatar} alt="avatar" className={styles.img} onClick={() => dispatch(putchAvatar('https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ1cKFVOpdVZUwqTxGf39TETI0OV4oUndFrzzAzSu8IOP4p-hVF2ErA9heqqjQ9BUWy', Number(userId)))} />
        <h1
          className={styles.name}
        >{`${userById.first_name} ${userById.last_name}`}</h1>
        <p className={styles.role}>Партнер</p>
      </div>
      <Button type={"Выход"} className={`${styles.btn}`} />
    </header>
  );
};

export default HeaderUser;
