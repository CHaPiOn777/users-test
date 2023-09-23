import { ChangeEvent, useEffect, useState } from "react";

type TValidations = {
  minLength: number;
  isEmpty: boolean;
  equalsPassword?: string;
  isEmail?: boolean;
}

export const useValidation = (value:string, validations: TValidations) => {
  const [isEmpty, setIsEmpty] = useState<string>('');
  const [minLengthError, setMinLengthError] = useState<string>('');
  const [isEmail, setIsEmail] = useState<string>('');
  const [equalsPassword, setEqualsPassword] = useState<string>('');

   useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError('Слишком короткое значение') : setMinLengthError('')
          break;
        case 'isEmpty':
          value ? setIsEmpty('') : setIsEmpty('Не может быть пустым')
          break;
        case 'isEmail':
          const EMAIL = 'eve.holt@reqres.in'
          value === EMAIL ? setIsEmail('') : setIsEmail('Email должен быть только eve.holt@reqres.in')
          break;
        case 'equalsPassword':
          validations[validation] !== value ? setEqualsPassword('Вы ввели разные пароли') : setEqualsPassword('')
          break;
        default:
          break;
      }
    }
   }, [value])

   return {
    isEmpty,
    minLengthError,
    isEmail,
    equalsPassword
   }
}

export const useInput = (intitialValue: string, validations: TValidations) => {
  const [value, setValue] = useState<string>(intitialValue);
  const [isDirty, setDirty] = useState<boolean>(false);

  const valid = useValidation(value, validations);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  };
};