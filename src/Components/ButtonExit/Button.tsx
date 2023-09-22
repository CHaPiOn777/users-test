import React, { ButtonHTMLAttributes, FC, HTMLProps, MouseEvent } from "react";
import styles from "./Button.module.css";
import { Exit } from "../../img/Exit";
import { Back } from "../../img/Back";

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  type: "Назад" | "Выход";
};

const Button: FC<IButton> = ({ type, onClick, className }) => {
  const sizeWindow = localStorage.getItem("size");
  const button = () => {
    return type === "Выход" ? <Exit /> : <Back />;
  };
  console.log(onClick)
  // const onClickBtn = (e: MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   onClick();
  // }

  return (
    <button
      onClick={onClick}
      className={
        `${sizeWindow === "small"
          ? `${styles.button} ${styles.buttonSmall}`
          : styles.button} ${className}`
      }
    >
      {sizeWindow === "small" ? button() : type}
    </button>
  );
};

export default Button;
