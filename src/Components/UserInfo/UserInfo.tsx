import React, { useEffect } from "react";
import { redirect, useParams, useNavigate } from "react-router-dom";

import styles from "./UserInfo.module.css";
import Button from "../Button/ButtonExit/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { UsersSlice } from "../../store/reducers/UsersSlice";
import { Phone } from "../../img/Phone";
import { Mail } from "../../img/Mail";
import HeaderUser from "./HeaderUser/HeaderUser";

const UserInfo = () => {
  const { userById, users } = useAppSelector((state) => state.usersReducer);
  const { filterUserById } = UsersSlice.actions;
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterUserById(Number(userId)));
  }, [users]);
  //так как с сервера приходят не все данные, пришлось некторую информацию захардкодить (роль, телефон и описание пользователя)
  return (
    userById && (
      <>
        <HeaderUser />
        <main className={styles.main}>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              Клиенты видят в&nbsp;нем эксперта по&nbsp;вопросам разработки
              комплексных решений финансовых продуктов, включая такие аспекты,
              как организационная структура, процессы, аналитика и&nbsp;
              ИТ-&nbsp;компоненты. Он&nbsp;помогает клиентам лучше понимать
              структуру рисков их&nbsp;бизнеса, улучшать процессы за&nbsp;счет
              применения новейших технологий и&nbsp;увеличивать продажи,
              используя самые современные аналитические инструменты.
            </p>
            <p className={styles.description}>
              В&nbsp;работе с&nbsp;клиентами недостаточно просто решить
              конкретную проблему или помочь справиться с&nbsp;трудностями.
              Не&nbsp;менее важно уделять внимание обмену знаниями: &laquo;Один
              из&nbsp;самых позитивных моментов&nbsp;&mdash; это осознание того,
              что ты&nbsp;помог клиенту перейти на&nbsp;совершенно новый уровень
              компетентности, уверенность в&nbsp;том, что после окончания
              проекта у&nbsp;клиента есть все необходимое, чтобы дальше
              развиваться самостоятельно&raquo;.
            </p>
            <p className={styles.description}>
              Помимо разнообразных проектов для клиентов финансового сектора,
              Сорин ведет активную предпринимательскую деятельность.
              Он&nbsp;является совладельцем сети клиник эстетической медицины
              в&nbsp;Швейцарии, предлагающей инновационный подход
              к&nbsp;красоте, а&nbsp;также инвестором других
              бизнес-&nbsp;проектов.
            </p>
          </div>

          <ul className={styles.socialList}>
            <li className={styles.item}>
              <span className={styles.span}>
                <Phone />
              </span>
              +7 (954) 333-44-55
            </li>
            <li className={styles.item}>
              <span className={styles.span}>
                <Mail />
              </span>
              {userById.email}
            </li>
          </ul>
        </main>
      </>
    )
  );
};

export default UserInfo;
