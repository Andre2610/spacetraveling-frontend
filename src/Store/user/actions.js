import axios from 'axios';

import { URL } from '../../Config/constants';
import { showMessageWithTimeout, appDoneLoading, appLoading } from '../appState/actions';
import { selectToken } from './selectors';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const TOKEN_STILL_VALID = 'TOKEN_STILL_VALID';
export const LOG_OUT = 'LOG_OUT';

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const login = (credentials) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const res = await axios.post(`${URL}/auth/login`, {
        credentials,
      });

      if (res.data.verified) {
        dispatch(loginSuccess(res.data));
        const message = `Hello ${res.data.firstName}, welcome to the space travel agency.`;
        dispatch(showMessageWithTimeout('success', false, message, 1500));
        dispatch(appDoneLoading());
      } else {
        const message = `Hello, ${res.data.firstName}, please verify your account by clicking the link sent to your email`;
        dispatch(showMessageWithTimeout('info', false, message, 4000));
        dispatch(appDoneLoading());
      }
    } catch (error) {
      if (error.response) {
        dispatch(showMessageWithTimeout('error', true, error.response.data.message, 4000));
      } else {
        dispatch(showMessageWithTimeout('error', true, error.message, 4000));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;

    dispatch(appLoading());
    try {
      const response = await axios.get(`${URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const signUp = (signUpcredentials) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const res = await axios.post(`${URL}/auth/signup`, {
        signUpcredentials,
      });
      const message = `Welcome to Duct Tape inc ${res.data.firstName}, please make sure to verify your account before logging in.`;
      dispatch(showMessageWithTimeout('success', true, message, 4000));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        const message = 'Unable to create account';
        dispatch(showMessageWithTimeout('error', true, message, 4000));
      } else {
        dispatch(showMessageWithTimeout('error', true, error.message, 4000));
      }
      dispatch(appDoneLoading());
    }
  };
};
