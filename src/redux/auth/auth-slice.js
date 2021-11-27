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
  // isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state, action) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.isAuth = true;
    },
    [authOperations.register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [authOperations.logIn.pending](state, action) {
      state.isLoading = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.isAuth = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload.error;
      console.log(action.payload);
    },
  },
});
// export const { greetingChange } = authSlice.actions;
export default authSlice.reducer;
