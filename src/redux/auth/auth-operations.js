import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

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

/* POST @ /users/signup
 * body { name, email, password }
 *
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */

const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(userRegister, user);
      token.set(data.token);
      return data;
    } catch (error) {
      if (user.password.length < 7) {
        toast.error(
          `Your password is shorter than the minimum allowed length (7).`,
        );
      } else {
        toast.error(`User with ${user.email} already exists`);
      }

      return rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(userLogin, user);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`Incorrect e-mail or password`);
      return rejectWithValue(error.message);
    }
  },
);

/*
 * POST @ /users/logout
 * headers:
 *    Authorization: Bearer token
 *
 *  После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(userLogOut);
      token.unset();
    } catch (error) {
      // toast.error(`Error`);
      return rejectWithValue(error.message);
    }
  },
);

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const response = await axios.get(userCurrent);
      return response.data;
    } catch (error) {
      toast.info(`Log in to access the PhoneBook`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const authOperations = { register, logIn, logOut, refreshCurrentUser };
export default authOperations;
