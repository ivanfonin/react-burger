import { SET_INGREDIENT } from '../actions/ingredient';

import { TIngredient } from '../types/data';

interface IAction {
  type: 'SET_INGREDIENT';
  ingredient: TIngredient;
}

type TState = null | TIngredient;

const initialState = null;

export const ingredientReducer = (
  state: TState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case SET_INGREDIENT: {
      return action.ingredient;
    }
    default:
      return state;
  }
};
