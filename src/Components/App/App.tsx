import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/action-creator/ActionCreater';
import ListUsers from '../ListUsers/ListUsers';
import HeaderMain from '../ListUsers/HeaderMain/HeaderMain';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from '../routes';
import {RegisterUserSlice} from '../../store/reducers/RegisterUserSlice';

const App = () => {
  const dispatch = useAppDispatch();  
  const mq = window.matchMedia('(max-width: 570px)');
  const token = localStorage.getItem('token')
  const {registerFetchingSuccess} = RegisterUserSlice.actions

  if (mq.matches) {
    localStorage.setItem("size", 'small');
  } else {
    localStorage.setItem("size", 'large');
  }

  useEffect(() => {
    dispatch(fetchUsers());
    if (token) {
      dispatch(registerFetchingSuccess(token));
    }
  }, [])
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;