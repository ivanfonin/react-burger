import { api } from '../../services/api/client';
import { getCookie } from '../../utils/helpers';
import { RESET_BURGER_INGREDIENTS } from '../actions/burger';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const RESET_ORDER = 'RESET_ORDER';

export const checkout = (order) => (dispatch) => {
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
          name: res.name,
          number: res.order.number,
        },
      });

      dispatch({ type: RESET_BURGER_INGREDIENTS });
    })
    .catch((err) => {
      dispatch({ type: CREATE_ORDER_FAILED });
    });
};
