import { api } from '../../services/api/client';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const RESET_ORDER = 'RESET_ORDER';

export const checkout = (order) => (dispatch) => {
  dispatch({type: CREATE_ORDER});
    
  api.post('/orders', order).then(res => {
    console.log(res);
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      order: {
        name: res.name,
        number: res.order.number
      }
    });
  }).catch(err => {
    dispatch({type: CREATE_ORDER_FAILED});
  });
}
