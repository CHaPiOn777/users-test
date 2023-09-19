import axios from "axios";
import { TUsersAction } from "../../types/users-types";
import { UsersSlice } from "../reducers/UsersSlice";
import { AppDispatch } from "../store";

export const baseURL = `https://reqres.in/api/`;

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UsersSlice.actions.usersFetching());
    const resPage1 = await axios.get<TUsersAction>(`${baseURL}users?page=1`);
    const resPage2 = await axios.get<TUsersAction>(`${baseURL}users?page=2`);
    const res = resPage1.data.data.concat(resPage2.data.data);
    dispatch(UsersSlice.actions.usersFetchingSuccess(res))
  } catch (error) {
    dispatch(UsersSlice.actions.usersFetchingError('Произошла ошибка при загрузке пользователей'))
  }
}