import { TIngredientActions } from '../actions/ingredient';
import { SET_INGREDIENT } from '../actions/ingredient';

import { TIngredient } from '../types/data';

type TState = null | TIngredient;

const initialState: TState = null;

export const ingredientReducer = (
  state = initialState,
  action: TIngredientActions
): TState => {
  switch (action.type) {
    case SET_INGREDIENT: {
      return action.ingredient;
    }
    default:
      return state;
  }
};
