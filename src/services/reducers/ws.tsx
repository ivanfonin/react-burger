import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
} from '../actions/ws';

import { TOrder } from '../types/data';

type TMessage = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};

interface IAction {
  type:
    | 'WS_CONNECTION_START'
    | 'WS_CONNECTION_SUCCESS'
    | 'WS_CONNECTION_CLOSE'
    | 'WS_CONNECTION_CLOSED'
    | 'WS_CONNECTION_ERROR'
    | 'WS_GET_MESSAGE';
  payload: string | Event;
  message: TMessage;
}

interface IState {
  wsUrl: string;
  wsRequest: boolean;
  wsError: string;
  userOrders: TOrder[] | null;
  orders: TOrder[] | null;
  total: number | null;
  totalToday: number | null;
}

const initialState = {
  wsUrl: '',
  wsRequest: false,
  wsError: '',
  userOrders: null,
  orders: null,
  total: null,
  totalToday: null,
};

export const wsReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        wsRequest: true,
        wsUrl: action.payload,
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
      const { orders, total, totalToday } = action.message;
      // todo: Бред какой-то получился, проще просто очищать стейт, когда происходит отключение сокета,
      if (state.wsUrl.includes('/orders/all')) {
        return {
          ...state,
          total,
          totalToday,
          orders: orders?.map((order) => {
            return { id: order._id, ...order };
          }),
        };
      } else if (state.wsUrl.includes('/orders?token')) {
        return {
          ...state,
          total,
          totalToday,
          userOrders: orders?.map((order) => {
            return { id: order._id, ...order };
          }),
        };
      }
      break;
    }
    default:
      return state;
  }
};