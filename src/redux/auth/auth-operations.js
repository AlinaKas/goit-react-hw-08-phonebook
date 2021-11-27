import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const BASE_USER_URL = `https://connections-api.herokuapp.com/`;
const userLogin = '/users/login';
const userRegister = '/users/signup';
const userLogOut = '/users/logout';
const userCurrent = '/users/current';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(userRegister, user);
      return data;
    } catch (error) {
      toast.error(`Invalid data`);
      return rejectWithValue({ error: error.message });
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(userLogin, user);
      return data;
    } catch (error) {
      toast.error(`Incorrect E-MAIL or PASSWORD`);
      return rejectWithValue({ error: error.message });
    }
  },
);

const authOperations = { register, logIn };
export default authOperations;
