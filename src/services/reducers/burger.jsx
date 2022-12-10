import {
  ADD_BURGER_INGREDIENT,
  REMOVE_BURGER_INGREDIENT,
  MOVE_BURGER_INGREDIENT
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
      let total = 0;

      if ('bun' === action.ingredient.type) {
        if (state.bun) {
          state.bun.counter = 0;
        }
        action.ingredient.counter = 2;
        bun = action.ingredient;
      }

      if ('bun' !== action.ingredient.type) {
        action.ingredient.counter += 1;
        ingredients.push(action.ingredient);
      }

      if (bun) {
        total += bun?.price * 2;
      } 
      
      if (ingredients) {
        total += ingredients?.reduce((acc, item) => item.price + acc, 0);
      }

      return {
        bun,
        ingredients,
        total
      }
    }
    case REMOVE_BURGER_INGREDIENT: {
      let total = 0;
      let ingredients = state.ingredients;
      let index = state.ingredients.findIndex(item => item._id === action.id);
      if (index > -1) {
        state.ingredients[index].counter -= 1;
        ingredients.splice(index, 1);
      }

      if (state.bun) {
        total = state.bun.price * 2;
      }
      
      if (ingredients) {
        total += ingredients.reduce((acc, item) => item.price + acc, 0);
      }

      return {
        ...state,
        ingredients,
        total
      }
    }
    case MOVE_BURGER_INGREDIENT: {
      const ingredients = state.ingredients;
      ingredients.splice(action.hoverIndex, 0, ingredients.splice(action.dragIndex, 1)[0])

      return {
        ...state,
        ingredients
      }
    }
    default:
      return state;
  }
}