import {
  GET_ORDERS,
  GET_ORDERS_FAILED,
  GET_ORDERS_SUCCESS,
} from '../actions/orders';

const initialState = {
  items: [],
  ordersRequest: false,
  ordersRequestFailed: false,
  ordersRequestMessage: '',
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS: {
      return {
        ...state,
        ordersRequest: true,
      };
    }
    case GET_ORDERS_SUCCESS: {
      return {
        items: action.orders,
        ordersRequest: false,
        ordersRequestFailed: false,
        ordersRequestMessage: '',
      };
    }
    case GET_ORDERS_FAILED: {
      return {
        ...state,
        ordersRequest: false,
        ordersRequestFailed: true,
        ordersRequestMessage: action.error,
      };
    }
    default:
      return state;
  }
};
