import {
  ADD_BURGER_INGREDIENT,
  REMOVE_BURGER_INGREDIENT
} from '../actions/burger';

const initialState = {
  bun: null,
  ingredients: [],
  total: 0
}

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      let bun = state.bun;
      let ingredients = state.ingredients;

      if ('bun' === action.ingredient.type && !bun) {
        bun = action.ingredient;
      } else {
        throw new Error('Можно добавить только одну булочку в конструктор.');
      }

      if ('bun' !== action.ingredient.type) {
        ingredients.push(action.ingredient);
      }

      return {
        bun,
        ingredients,
        total: bun?.price * 2 + ingredients?.reduce((acc, item) => item.price + acc, 0)
      }
    }
    case REMOVE_BURGER_INGREDIENT: {
      return {
        
      }
    }
    default:
      return state;
  }
}