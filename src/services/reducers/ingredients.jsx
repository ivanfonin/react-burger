import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  INCREASE_INGREDIENT_COUNTER,
  DECREASE_INGREDIENT_COUNTER,
} from '../actions/ingredients';

const initialState = {
  items: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        items: action.ingredients.map((item) => {
          return { ...item, counter: 0 };
        }),
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      };
    }
    case INCREASE_INGREDIENT_COUNTER: {
      return {
        ...state,
        items: state.items.map((item) => {
          if ('bun' === action.ingredient.type && 'bun' === item.type) {
            if (item._id === action.ingredient._id) {
              item.counter = 2;
            } else {
              item.counter = 0;
            }
          }

          if (
            item._id === action.ingredient._id &&
            'bun' !== action.ingredient.type
          ) {
            item.counter += 1;
          }

          return { ...item };
        }),
      };
    }
    case DECREASE_INGREDIENT_COUNTER: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.ingredient._id) {
            if ('bun' !== item.type) {
              item.counter -= 1;
            } else {
              item.counter = 0;
            }
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
};
