import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  RESET_ORDER,
} from '../actions/checkout';

import { TOrder } from '../types/data';

interface IAction {
  type:
    | 'CREATE_ORDER'
    | 'CREATE_ORDER_SUCCESS'
    | 'CREATE_ORDER_FAILED'
    | 'RESET_ORDER';
  order: TOrder;
}

interface IState {
  orderRequest: Boolean;
  orderFailed: Boolean;
  order: TOrder | null;
}

const initialState = {
  orderRequest: false,
  orderFailed: false,
  order: null,
};

export const checkoutReducer = (
  state: IState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case CREATE_ORDER: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case CREATE_ORDER_SUCCESS: {
      return {
        orderRequest: false,
        orderFailed: false,
        order: action.order,
      };
    }
    case CREATE_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case RESET_ORDER: {
      return initialState;
    }
    default:
      return state;
  }
};
