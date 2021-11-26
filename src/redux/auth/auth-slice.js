// import axios from 'axios';
// axios.defaults.baseURL =
//     'https://61965d6eaf46280017e7dff4.mockapi.io/api/phonebook';
import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  // token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {
  //   greetingChange: (state, action) => {
  //     return {
  //       ...state,
  //       greeting: action.payload,
  //     };
  //   },
  // },
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});
// export const { greetingChange } = authSlice.actions;
export default authSlice.reducer;
