import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
} from '../actions/ws';

const initialState = {
  wsRequest: false,
  wsError: '',
  orders: null,
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        wsRequest: true,
      };
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsRequest: false,
      };
    }
    case WS_CONNECTION_CLOSE: {
      return {
        ...state,
        wsRequest: false,
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsRequest: false,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsRequest: false,
        wsError: action.payload,
      };
    }
    case WS_GET_MESSAGE: {
      return {
        ...state,
        orders: action.payload.map((order) => {
          return { id: order._id, ...order };
        }),
      };
    }
    default:
      return state;
  }
};
