import { TOrderActions } from '../actions/order';
import {
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
} from '../actions/order';
import { TOrder } from '../types/data';

interface IState {
  order: TOrder | null;
  orderRequest: boolean;
  orderRequestFailed: boolean;
  orderRequestMessage: string;
}

const initialState: IState = {
  order: null,
  orderRequest: false,
  orderRequestFailed: false,
  orderRequestMessage: '',
};

export const orderReducer = (
  state = initialState,
  action: TOrderActions
): IState => {
  switch (action.type) {
    case GET_ORDER: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        order: action.order,
        orderRequest: false,
        orderRequestFailed: false,
        orderRequestMessage: '',
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderRequestFailed: true,
        orderRequestMessage: action.error,
      };
    }
    default:
      return state;
  }
};
