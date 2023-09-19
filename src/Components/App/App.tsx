import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/action-creator/ActionCreater';
import Header from '../Header/Header';
import ListUsers from '../ListUsers/ListUsers';

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
    <div>
      <Header></Header>
      <ListUsers></ListUsers>
    </div>
  );
};

export default App;