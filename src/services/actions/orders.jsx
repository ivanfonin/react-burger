import { api } from '../api/client';
import { getCookie } from '../../utils/helpers';

export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILED = 'GET_ORDERS_FAILED';

export const getOrders = () => (dispatch) => {
  dispatch({ type: GET_ORDERS });

  api
    .get('/orders', {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
      },
    })
    .then((res) => {
      dispatch({ type: GET_ORDERS_SUCCESS, orders: res.data });
    })
    .catch((error) => {
      dispatch({ type: GET_ORDERS_FAILED, error });
    });
};
