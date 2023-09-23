import { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";

import { useAppDispatch } from '../../hooks/redux';
import { addLocalLikes, fetchUsers } from '../../store/action-creator/ActionCreater';
import { router } from '../routes';
import {RegisterUserSlice} from '../../store/reducers/RegisterUserSlice';

const App = () => {
  const dispatch = useAppDispatch();  
  const mq = window.matchMedia('(max-width: 570px)');
  const token = localStorage.getItem('token')
  const {registerFetchingSuccess} = RegisterUserSlice.actions
  const likesLocal = localStorage.getItem('likes');
  //так как в localStorage тип данных строка, нужно изменить тип данных на Number каждого элемента
  const numberLikesLocal = JSON.parse(likesLocal!).map((item: string) => {
    return Number(item)
  })

  if (mq.matches) {
    localStorage.setItem("size", 'small');
  } else {
    localStorage.setItem("size", 'large');
  }

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(addLocalLikes(numberLikesLocal))
    if (token) {
      dispatch(registerFetchingSuccess(token));
    }
  }, [])
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;