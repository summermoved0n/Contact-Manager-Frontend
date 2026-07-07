import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://contact-manager-backend-fb7b.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (registerData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', registerData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', loginData);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const storageToken = state.auth.token;

    if (storageToken === null) {
      return rejectWithValue();
    }

    token.set(storageToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);
