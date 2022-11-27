import {
  SET_INGREDIENT,
  RESET_INGREDIENT
} from '../actions/ingredient';

const initialState = null;

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT: {
      return action.ingredient;
    }
    case RESET_INGREDIENT: {
      return null;
    }
    default: 
      return state;
  }
}