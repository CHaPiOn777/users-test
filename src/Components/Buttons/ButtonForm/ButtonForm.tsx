import React, { FC } from "react";
import styles from "./ButtonForm.module.css";

interface IBtn extends React.HTMLProps<HTMLButtonElement> {
  isLoading: boolean;
}

const ButtonForm: FC<IBtn> = ({ children, className, isLoading }) => {
  return (
    <button className={`${styles.btn} ${className}`}>
      {isLoading ? "Загрузка..." : children}
    </button>
  );
};

export default ButtonForm;
