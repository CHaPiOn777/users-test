import styles from "./HeaderMain.module.css";
import ButtonExit from "../../Button/ButtonExit/Button";

const HeaderMain = () => {


  return (
    <header className={styles.header}>
      <ButtonExit type={'Выход'} />
      <h1 className={styles.title}>Наша команда</h1>
      <p className={styles.description}>
        Это опытные специалисты, хорошо разбирающиеся во&nbsp;всех задачах,
        которые ложатся на&nbsp;их&nbsp;плечи, и&nbsp;умеющие находить выход
        из&nbsp;любых, даже самых сложных ситуаций.
      </p>
    </header>
  );
};

export default HeaderMain;
