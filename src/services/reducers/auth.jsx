import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_MESSAGE_HIDE,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  SET_PASSWORD,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAILED,
} from '../actions/auth';

const initialState = {
  getUserRequest: true,
  getUserRequestFailed: false,
  getUserRequestMessage: '',
  registerRequest: false,
  registerRequestFailed: false,
  registerRequestMessage: '',
  loginRequest: false,
  loginRequestFailed: false,
  loginRequestMessage: '',
  updateProfileRequest: false,
  updateProfileRequestFailed: false,
  updateProfileRequestSuccess: false,
  updateProfileRequestMessage: '',
  resetPasswordRequest: false,
  resetPasswordRequestFailed: false,
  resetPasswordRequestMessage: '',
  setPasswordRequest: false,
  setPasswordRequestFailed: false,
  setPasswordRequestMessage: '',
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        getUserRequest: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        getUserRequestFailed: false,
        user: action.user,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserRequestFailed: true,
        getUserRequestMessage: action.error,
        user: null,
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
        registerRequest: true,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerRequestFailed: false,
        user: action.user,
      };
    }
    case REGISTER_USER_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginRequestFailed: true,
        loginRequestMessage: action.error,
        user: null,
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginRequestFailed: false,
        user: action.user,
      };
    }
    case LOGIN_USER_FAILED: {
      console.log(action);
      return {
        ...state,
        loginRequest: false,
        loginRequestFailed: true,
        loginRequestMessage: action.error,
        user: null,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        logoutRequest: true,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...initialState,
        getUserRequest: false,
      };
    }
    case LOGOUT_USER_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutRequestFailed: true,
        logoutRequestMessage: action.error,
      };
    }
    case UPDATE_PROFILE: {
      return {
        ...state,
        updateProfileRequest: true,
        updateProfileRequestSuccess: false,
        updateProfileRequestMessage: '',
      };
    }
    case UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        updateProfileRequest: false,
        updateProfileRequestSuccess: true,
        user: action.user,
      };
    }
    case UPDATE_PROFILE_FAILED: {
      return {
        ...state,
        updateProfileRequest: false,
        updateProfileRequestFailed: true,
        updateProfileRequestSuccess: false,
        updateProfileRequestMessage: action.error,
      };
    }
    case UPDATE_PROFILE_MESSAGE_HIDE: {
      return {
        ...state,
        updateProfileRequestSuccess: false,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        resetPasswordRequest: true,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: false,
        resetPasswordRequestMessage: '',
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: true,
        resetPasswordRequestMessage: action.error,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        setPasswordRequest: true,
      };
    }
    case SET_PASSWORD_SUCCESS: {
      return {
        ...state,
        setPasswordRequest: false,
        setPasswordRequestFailed: false,
      };
    }
    case SET_PASSWORD_FAILED: {
      return {
        ...state,
        setPasswordRequest: false,
        setPasswordRequestFailed: true,
        setPasswordRequestMessage: action.error,
      };
    }
    default:
      return state;
  }
};
