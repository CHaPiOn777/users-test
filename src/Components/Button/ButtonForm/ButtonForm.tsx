import React, { FC } from "react";
import styles from "./ButtonForm.module.css";


const ButtonForm: FC<React.HTMLProps<HTMLButtonElement>> = () => {
  return <button className={styles.btn}>Зарегистрироваться</button>;
};

export default ButtonForm;
