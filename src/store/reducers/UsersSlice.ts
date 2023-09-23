import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TUser } from "../../types/users-types";

type TLikes = {
  id: number; 
  flag: boolean
}

type TUsersState = {
  users: TUser[];
  isLoading: boolean;
  error: string;
  userById: TUser;
  likes: number[];
}

const initialState: TUsersState = {
  users: [],
  isLoading: true,
  error: '',
  userById: {
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  },
  likes: []
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
      state.isLoading = false;
      state.error = action.payload;
    },
    filterUserById(state, action: PayloadAction<number>) {
      state.userById = state.users.filter(user => user.id === action.payload)[0]
    },

    upsateUserAvatarFetching(state) {
      state.isLoading = true;
    },
    upsateUserAvatarFetchingSuccess(state, action: PayloadAction<{avatar: string, id: number}>) {
      state.isLoading = false;
      const updateUser = state.users.find(el => el.id === action.payload.id);
      updateUser!.avatar = action.payload.avatar;
      state.error = '';
    },
    upsateUserAvatarFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    setLikes(state, action: PayloadAction<number>) {
      state.likes.includes(action.payload) ? 
      state.likes = state.likes.filter(item => item !== action.payload) : 
      state.likes.push(action.payload)
    },
    addLocalLikes(state, action: PayloadAction<number[]>) {
      state.likes = action.payload
    }
  }
})

export default UsersSlice.reducer