import { api } from '../api/client';

export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDERS_FAILED';

export const fetchOrder = (number) => (dispatch) => {
  dispatch({ type: GET_ORDER });

  api
    .get(`/orders/${number}`)
    .then((res) => {
      dispatch({
        type: GET_ORDER_SUCCESS,
        order: res.orders[0],
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ORDER_FAILED, error: err.message });
    });
};
