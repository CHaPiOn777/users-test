import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../Buttons/ButtonExit/Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { UsersSlice } from "../../../store/reducers/UsersSlice";
import styles from "./HeaderUser.module.css";
import Modal from "../../Modal/Modal";
import ChangeAvatar from "../../Modal/ChangeAvatar/ChangeAvatar";

const HeaderUser = () => {
  const { userById, users } = useAppSelector((state) => state.usersReducer);
  const [activePopup, setActivePopup] = useState<boolean>(false);
  const { filterUserById } = UsersSlice.actions;
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterUserById(Number(userId)));
  }, [users]);

  const changeAvatar = () => {
    setActivePopup(true);
  };

  //так как с сервера приходят не все данные, пришлось некторую информацию захардкодить
  //(роль, телефон и описание пользователя)
  return (
    <header className={styles.header}>
      <Modal active={activePopup} setActive={setActivePopup}>
        <ChangeAvatar active={activePopup} setActive={setActivePopup} />
      </Modal>
      <Button type={"Назад"} className={styles.btn} />
      <div className={styles.user}>
        <img
          src={userById.avatar}
          alt="avatar"
          className={styles.img}
          onClick={() => changeAvatar()}
        />
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
