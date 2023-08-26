import { api } from '../api/client';
import { TIngredient, TServerIngredient } from '../types/data';

export const GET_INGREDIENTS: 'GET_INGREDIENTS' = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' =
  'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' =
  'GET_INGREDIENTS_FAILED';
export const INCREASE_INGREDIENT_COUNTER: 'INCREASE_INGREDIENT_COUNTER' =
  'INCREASE_INGREDIENT_COUNTER';
export const DECREASE_INGREDIENT_COUNTER: 'DECREASE_INGREDIENT_COUNTER' =
  'DECREASE_INGREDIENT_COUNTER';

interface IGetIngredients {
  readonly type: typeof GET_INGREDIENTS;
}
interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: Array<TServerIngredient>;
}
interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
  error: string;
}
interface IIncreaseIngredientCounter {
  readonly type: typeof INCREASE_INGREDIENT_COUNTER;
  ingredient: TIngredient;
}
interface IDecreaseIngredientCounter {
  readonly type: typeof DECREASE_INGREDIENT_COUNTER;
  ingredient: { id: string };
}

export type TIngredientsActions =
  | IGetIngredients
  | IGetIngredientsSuccess
  | IGetIngredientsFailed
  | IIncreaseIngredientCounter
  | IDecreaseIngredientCounter;

export const getIngredients = () => (dispatch: any) => {
  dispatch({ type: GET_INGREDIENTS });

  api
    .get('/ingredients')
    .then((res) => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: res?.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_INGREDIENTS_FAILED, error: err.message });
    });
};

export const increaseIngredientCounter =
  (ingredient: TIngredient) => (dispatch: any) => {
    dispatch({
      type: INCREASE_INGREDIENT_COUNTER,
      ingredient,
    });
  };

export const decreaseIngredientCounter =
  (ingredient: { id: string }) => (dispatch: any) => {
    dispatch({
      type: DECREASE_INGREDIENT_COUNTER,
      ingredient,
    });
  };
