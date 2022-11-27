import { api } from '../../services/api/client';

export const GET_INGREDIENTS = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = () => (dispatch) => {
  dispatch({type: GET_INGREDIENTS});
    
  api.get('/ingredients').then(res => {
    dispatch({
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: res.data
    });
  }).catch(err => {
    dispatch({type: GET_INGREDIENTS_FAILED});
  });
}