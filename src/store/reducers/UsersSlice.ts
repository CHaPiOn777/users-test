import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TUsersAction, TUser } from "../../types/users-types";

type TUsersState = {
  users: TUser[];
  isLoading: boolean;
  error: string;
  userById: TUser;
}

const initialState: TUsersState = {
  users: [],
  isLoading: false,
  error: '',
  userById: {
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  }
}

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<TUser[]>) {
      state.isLoading = false;
      state.users = action.payload;
      state.error = '';
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.error = action.payload;
    },

    filterUserById(state, action: PayloadAction<number>) {
      state.userById = state.users.filter(user => user.id === action.payload)[0]
    }
  }
})

export default UsersSlice.reducer