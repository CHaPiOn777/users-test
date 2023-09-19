import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.button}>Выход</button>
      <h1 className={styles.title}>Наша команда</h1>
      <p className={styles.description}>
        Это опытные специалисты, хорошо разбирающиеся во&nbsp;всех задачах,
        которые ложатся на&nbsp;их&nbsp;плечи, и&nbsp;умеющие находить выход
        из&nbsp;любых, даже самых сложных ситуаций.
      </p>
    </header>
  );
};

export default Header;
