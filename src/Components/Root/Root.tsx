import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchUsers } from '../../store/action-creator/ActionCreater';
import ListUsers from '../ListUsers/ListUsers';

const Root = () => {
  

  return (
    <div>
      <ListUsers />
    </div>
  );
};

export default Root;