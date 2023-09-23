import React, { FC, useState, useEffect } from "react";
import styles from "./Input.module.css";

type TValue = {
  valueValidate: {
    isEmpty?: string;
    minLengthError: string;
    isEmail?: string;
    equalsPassword?: string;
    validURL?: string;
    isDirty: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  title: string;
  type: string;
};

const Input: FC<TValue> = ({ valueValidate, title, type }) => {
  const [errorInput, setErrorInput] = useState<boolean>(false)
  const { isEmpty, minLengthError, isEmail, equalsPassword, validURL } = valueValidate;
  const error = { isEmpty, minLengthError, isEmail, equalsPassword, validURL };
  useEffect(() => {
    if ((isEmpty || minLengthError || isEmail || equalsPassword || validURL) && valueValidate.isDirty) {
      setErrorInput(true)
    } else (
      setErrorInput(false)
    )
  }, [isEmpty, minLengthError, isEmail, equalsPassword])
  return (
    <>
      <input
        onChange={(e) => valueValidate.onChange(e)}
        onBlur={() => valueValidate.onBlur()}
        value={valueValidate.value}
        name={title}
        className={errorInput ? `${styles.input} ${styles.inputError}` : styles.input}
        type={type}
        placeholder={`Введите ${title}`}
      />
      {error &&
        valueValidate.isDirty &&
        Object.values(error).map(
          (item, index) =>
            item && (
              <span key={index} className={styles.span}>
                {item}
              </span>
            )
        )}
    </>
  );
};

export default Input;
