import { TBurgerActions } from '../actions/burger';
import {
  ADD_BURGER_INGREDIENT,
  REMOVE_BURGER_INGREDIENT,
  MOVE_BURGER_INGREDIENT,
  RESET_BURGER_INGREDIENTS,
} from '../actions/burger';
import { TIngredient } from '../types/data';

interface IState {
  bun: TIngredient | null;
  ingredients: Array<TIngredient>;
  total: number;
}

const initialState: IState = {
  bun: null,
  ingredients: [],
  total: 0,
};

export const burgerReducer = (
  state = initialState,
  action: TBurgerActions
): IState => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      let bun = state.bun;
      let ingredients = state.ingredients;
      let total = 0;

      if ('bun' === action.ingredient?.type) {
        bun = action.ingredient;
      }

      if ('bun' !== action.ingredient?.type) {
        ingredients.push(action.ingredient);
      }

      if (bun) {
        total += bun?.price * 2;
      }

      if (ingredients) {
        total += ingredients?.reduce((acc, item) => item.price + acc, 0);
      }

      ingredients = ingredients?.map((item) => item);

      return {
        ...state,
        bun,
        ingredients,
        total,
      };
    }
    case REMOVE_BURGER_INGREDIENT: {
      let total = 0;
      let ingredients = state.ingredients;
      let index = state.ingredients.findIndex((item) => item.id === action.id);
      if (index > -1) {
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
        total,
      };
    }
    case MOVE_BURGER_INGREDIENT: {
      const ingredients = state.ingredients;
      ingredients.splice(
        action?.hoverIndex,
        0,
        ...ingredients.splice(action?.dragIndex, 1)
      );

      return {
        ...state,
        ingredients,
      };
    }
    case RESET_BURGER_INGREDIENTS: {
      return {
        bun: null,
        ingredients: [],
        total: 0,
      };
    }
    default:
      return state;
  }
};
