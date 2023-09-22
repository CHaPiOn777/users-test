import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/action-creator/ActionCreater';
import ListUsers from '../ListUsers/ListUsers';
import HeaderMain from '../ListUsers/HeaderMain/HeaderMain';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from '../routes';

const App = () => {
  const dispatch = useAppDispatch();
  const mq = window.matchMedia('(max-width: 570px)');

  if (mq.matches) {
    localStorage.setItem("size", 'small');
  } else {
    localStorage.setItem("size", 'large');
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <RouterProvider router={router} />
  );
};

export default App;