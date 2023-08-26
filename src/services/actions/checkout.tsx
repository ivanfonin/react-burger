import { api } from '../api/client';
import { getCookie } from '../../utils/helpers';
import { RESET_BURGER_INGREDIENTS } from './burger';
import { TOrder } from '../types/data';

export const CREATE_ORDER: 'CREATE_ORDER' = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS' =
  'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED: 'CREATE_ORDER_FAILED' = 'CREATE_ORDER_FAILED';
export const RESET_ORDER: 'RESET_ORDER' = 'RESET_ORDER';

interface ICreateOrder {
  readonly type: typeof CREATE_ORDER;
}

interface ICreateOrderSuccess {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  order: TOrder;
}

interface ICreateOrderFailed {
  readonly type: typeof CREATE_ORDER_FAILED;
}

interface IResetOrder {
  readonly type: typeof RESET_ORDER;
}

export type TCheckoutActions =
  | ICreateOrder
  | ICreateOrderSuccess
  | ICreateOrderFailed
  | IResetOrder;

export const checkout = (order: TOrder) => (dispatch: any) => {
  dispatch({ type: CREATE_ORDER });

  api
    .post('/orders', order, {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
      },
    })
    .then((res) => {
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        order: {
          name: res?.name,
          number: res?.order?.number,
        },
      });
      dispatch({ type: RESET_BURGER_INGREDIENTS });
    })
    .catch((err) => {
      dispatch({ type: CREATE_ORDER_FAILED });
    });
};
