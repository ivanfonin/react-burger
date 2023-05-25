import { api } from '../api/client';
import { setCookie, getCookie } from '../../utils/helpers';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILED = 'LOGOUT_USER_FAILED';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED';
export const UPDATE_PROFILE_MESSAGE_HIDE = 'UPDATE_PROFILE_MESSAGE_HIDE';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_PASSWORD_SUCCESS = 'SET_PASSWORD_SUCCESS';
export const SET_PASSWORD_FAILED = 'SET_PASSWORD_FAILED';

export const checkAuth = () => (dispatch) => {
  dispatch({ type: GET_USER });

  if (!getCookie('token')) {
    dispatch({ type: GET_USER_FAILED, error: 'Необходимо авторизоваться' });

    return;
  }

  api
    .get('/auth/user', {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
      },
    })
    .then((res) => {
      dispatch({ type: GET_USER_SUCCESS, user: res.user });
    })
    .catch((error) => {
      dispatch({ type: GET_USER_FAILED, error });
    });
};

export const register = (form) => (dispatch) => {
  dispatch({ type: REGISTER_USER });

  api
    .post('/auth/register', form)
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESS, user: res.user });
      setCookie('token', res.accessToken.split('Bearer ')[1]);
      setCookie('refreshToken', res.refreshToken);
    })
    .catch((error) => {
      dispatch({ type: REGISTER_USER_FAILED, error });
    });
};

export const login = (form) => (dispatch) => {
  dispatch({ type: LOGIN_USER });

  api
    .post('/auth/login', form)
    .then((res) => {
      dispatch({ type: LOGIN_USER_SUCCESS, user: res.user });
      setCookie('token', res.accessToken.split('Bearer ')[1]);
      setCookie('refreshToken', res.refreshToken);
    })
    .catch((error) => {
      dispatch({ type: LOGIN_USER_FAILED, error });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });

  if (!getCookie('refreshToken')) {
    dispatch({ type: LOGOUT_USER_SUCCESS });
  }

  api
    .post('/auth/logout', {
      token: getCookie('refreshToken'),
    })
    .then(() => {
      setCookie('token', '', { expires: -1000 });
      setCookie('refreshToken', '', { expires: -1000 });
      dispatch({ type: LOGOUT_USER_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: LOGOUT_USER_FAILED, error });
    });
};

export const updateProfile = (form) => (dispatch) => {
  dispatch({ type: UPDATE_PROFILE });

  api
    .patch('/auth/user', form, {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
      },
    })
    .then((res) => {
      dispatch({ type: UPDATE_PROFILE_SUCCESS, user: res.user, success: true });
    })
    .catch((error) => {
      dispatch({ type: UPDATE_PROFILE_FAILED, error });
    });
};

export const resetPassword = (form) => (dispatch) => {
  dispatch({ type: RESET_PASSWORD });

  api
    .post('/password-reset', form)
    .then(() => {
      dispatch({ type: RESET_PASSWORD_SUCCESS });
      setCookie('password-reset-code', 'sent', { expires: 60 * 20 });
      window.location = '/reset-password';
    })
    .catch((error) => {
      dispatch({ type: RESET_PASSWORD_FAILED, error });
    });
};

export const setPassword = (form) => (dispatch) => {
  dispatch({ type: SET_PASSWORD });

  api
    .post('/password-reset/reset', form)
    .then(() => {
      dispatch({ type: SET_PASSWORD_SUCCESS });
      setCookie('password-reset-code', 'sent', { expires: -1000 });
    })
    .catch((error) => {
      dispatch({ type: SET_PASSWORD_FAILED, error });
    });
};
