import { FormEvent, useEffect } from "react";
import {useLocation, Navigate, useNavigate} from 'react-router-dom';
import styles from "./SignUp.module.css";
import { useInput } from "../../hooks/inputHooks";
import Input from "../../Components/Input/Input";
import ButtonForm from "../../Components/Button/ButtonForm/ButtonForm";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { registerUser } from "../../store/action-creator/ActionCreater";

const SignUp = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const formPage = location.state.pathname || '/';
  const token = useAppSelector(state => state.registerReducer.token)
  const navigate = useNavigate()

  const email = useInput("", { minLength: 9, isEmpty: true, isEmail: true });
  const password = useInput("", { minLength: 3, isEmpty: true });
  const passwordRetry = useInput("", {
    minLength: 3,
    isEmpty: true,
    equalsPassword: password.value,
  });
  const name = useInput("", { minLength: 3, isEmpty: true });

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    dispatch(registerUser(email.value, password.value ))
    e.preventDefault()
  };
  
  useEffect(() => {
    if (token) {
      navigate(formPage, {replace: true})
    };
  }, [token])
 
  return (
    <div className={styles.container}>
      <form onSubmit={(e) => onSubmitForm(e)} className={styles.form}>
        <h2 className={styles.title}>Регистрация</h2>
        <div className={styles.inputContainer}>
          <label className={styles.description}>Имя</label>
          <Input valueValidate={name} title={"Имя"} type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.description}>Почта</label>
          <Input valueValidate={email} title={"Email"} type="email" />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.description}>Пароль</label>
          <Input valueValidate={password} title={"Пароль"} type="password" />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.description}>Подтвердите пароль</label>
          <Input
            valueValidate={passwordRetry}
            title={"Пароль"}
            type="password"
          />
        </div>
        <ButtonForm />
      </form>
    </div>
  );
};

export default SignUp;
