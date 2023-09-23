import React, { useEffect, FC, HTMLProps, MouseEvent } from "react";
import {useNavigate, useLocation} from 'react-router-dom'
import styles from "./Button.module.css";
import { Exit } from "../../../img/Exit";
import { Back } from "../../../img/Back";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { logoutUser } from "../../../store/action-creator/ActionCreater";

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  type: "Назад" | "Выход";
};

const Button: FC<IButton> = ({ type, className }) => {
  const sizeWindow = localStorage.getItem("size");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.registerReducer.token)
  const tokenLocal = localStorage.getItem('token')
  const location = useLocation()

  const button = () => {
    return type === "Выход" ? <Exit /> : <Back />;
  };
  
  const onClickBtn = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    type === 'Выход' ? dispatch(logoutUser()) : navigate('/')
  }

  useEffect(() => {
    if (!tokenLocal) {
      navigate('/signUp', {state: location})
    }
  }, [token])

  return (
    <button
      onClick={e => onClickBtn(e)}
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
