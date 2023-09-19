import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/action-creator/ActionCreater';
import Header from '../Header/Header';
import ListUsers from '../ListUsers/ListUsers';

const App = () => {
  const dispatch = useAppDispatch();
  // const {users} = useAppSelector(state => state.usersReducer);

  useEffect(() => {
    dispatch(fetchUsers(1))
  }, [])
  
  return (
    <div>
      <Header></Header>
      <ListUsers></ListUsers>
    </div>
  );
};

export default App;