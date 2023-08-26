import { TOrder } from '../types/data';
import { api } from '../api/client';

export const GET_ORDER: 'GET_ORDER' = 'GET_ORDER';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';

interface IGetOrder {
  readonly type: typeof GET_ORDER;
}

interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  order: TOrder;
}

interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
  error: string;
}

export type TOrderActions = IGetOrder | IGetOrderSuccess | IGetOrderFailed;

export const fetchOrder = (number: number) => (dispatch: any) => {
  dispatch({ type: GET_ORDER });

  api
    .get(`/orders/${number}`)
    .then((res) => {
      dispatch({
        type: GET_ORDER_SUCCESS,
        order: res?.orders ? res.orders[0] : null,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ORDER_FAILED, error: err.message });
    });
};
