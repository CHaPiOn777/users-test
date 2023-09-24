import {FormEvent, FC} from "react";
import { useParams } from "react-router-dom";

import styles from "./ChangeAvatar.module.css";
import Input from "../../Input/Input";
import { useInput } from "../../../hooks/inputHooks";
import ButtonForm from "../../Buttons/ButtonForm/ButtonForm";
import { putchAvatar } from "../../../store/action-creator/ActionCreater";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { TModal } from "../Modal";

const ChangeAvatar:FC<TModal> = ({setActive, active}) => {
  const avatar = useInput("", { minLength: 6, isEmpty: true, validURL: true });
  const isLoading = useAppSelector((state) => state.usersReducer.isLoading);

  const { userId } = useParams();
  const dispatch = useAppDispatch();

  const onSubmitAvatar = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(putchAvatar(avatar.value, Number(userId)));
    setActive(!active)
  }
  return (
    <form className={styles.form} onSubmit={e => onSubmitAvatar(e)}>
      <label className={styles.label}>Изменить аватар</label>
      <Input valueValidate={avatar} title="URL" type="text" />
      <ButtonForm isLoading={isLoading} className={styles.btn}>Отправить</ButtonForm>
    </form>
  );
};

export default ChangeAvatar;
