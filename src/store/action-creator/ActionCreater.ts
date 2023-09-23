import axios from "axios";
import { TUsersAction } from "../../types/users-types";
import { UsersSlice } from "../reducers/UsersSlice";
import { AppDispatch } from "../store";
import {RegisterUserSlice} from "../reducers/RegisterUserSlice";

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
export const registerUser = (email:string, password:string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(RegisterUserSlice.actions.registerFetching());
    const res = await axios.post<{id: number, token: string}>(`${baseURL}register`, {email:email, password: password});
    localStorage.setItem('token', res.data.token);
    dispatch(RegisterUserSlice.actions.registerFetchingSuccess(res.data.token))
  } catch (error) {
    dispatch(RegisterUserSlice.actions.registerFetchingError("Произошла ошибка при регистрации пользователя"))
  }
}
export const logoutUser = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem('token');
  dispatch(RegisterUserSlice.actions.signOut())
}

export const putchAvatar = (avatar: string, id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(UsersSlice.actions.upsateUserAvatarFetching());
    const res = await axios.patch<{avatar: string}>(`${baseURL}users/${id}`, {avatar});
    dispatch(UsersSlice.actions.upsateUserAvatarFetchingSuccess({avatar, id}))
  } catch (error) {
    console.log(error)
    dispatch(UsersSlice.actions.upsateUserAvatarFetchingError("Произошла ошибка при обновление фотографии"));
  }
}