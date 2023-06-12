import { SET_INGREDIENT } from '../actions/ingredient';

const initialState = null;

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT: {
      return action.ingredient;
    }
    default:
      return state;
  }
};
