import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TUsersState = {
  token: string;
  isLoading: boolean;
  error: string;
}

const initialState: TUsersState = {
  token: '',
  isLoading: false,
  error: '',
}

export const RegisterUserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerFetching(state) {
      state.isLoading = true;
    },
    registerFetchingSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.token = action.payload;
      state.error = '';
    },
    registerFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    signOut(state) {
      state.token = '';
    },
   
  }
})

export default RegisterUserSlice.reducer