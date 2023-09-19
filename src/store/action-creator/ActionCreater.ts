import axios from "axios";
import { TUsersAction } from "../../types/users-types";
import { UsersSlice } from "../reducers/UsersSlice";
import { AppDispatch } from "../store";

export const baseURL = `https://reqres.in/api/`;

export const fetchUsers = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(UsersSlice.actions.usersFetching());
    const res = await axios.get<TUsersAction>(`${baseURL}users?page=${page}`)
    dispatch(UsersSlice.actions.usersFetchingSuccess(res.data))
  } catch (error) {
    dispatch(UsersSlice.actions.usersFetchingError('Произошла ошибка при загрузке пользователей'))
  }
}