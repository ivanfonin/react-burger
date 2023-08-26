import { api } from '../../services/api/client';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const INCREASE_INGREDIENT_COUNTER = 'INCREASE_INGREDIENT_COUNTER';
export const DECREASE_INGREDIENT_COUNTER = 'DECREASE_INGREDIENT_COUNTER';

export const getIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS });

  api
    .get('/ingredients')
    .then((res) => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_INGREDIENTS_FAILED, error: err.message });
    });
};

export const increaseIngredientCounter = (ingredient) => (dispatch) => {
  dispatch({
    type: INCREASE_INGREDIENT_COUNTER,
    ingredient,
  });
};

export const decreaseIngredientCounter = (ingredient) => (dispatch) => {
  dispatch({
    type: DECREASE_INGREDIENT_COUNTER,
    ingredient,
  });
};
