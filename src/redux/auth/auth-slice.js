// import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
// axios.defaults.baseURL =
//     'https://61965d6eaf46280017e7dff4.mockapi.io/api/phonebook';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
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
    },

    [authOperations.logIn.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [authOperations.logOut.pending](state, action) {
      state.isLoading = true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.isLoading = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.logOut.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [authOperations.refreshCurrentUser.pending](state, action) {
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    },

    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },

    [authOperations.refreshCurrentUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
