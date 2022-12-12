import { v4 as uuidv4 } from 'uuid';

export const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT';
export const REMOVE_BURGER_INGREDIENT = 'REMOVE_BURGER_INGREDIENT';
export const MOVE_BURGER_INGREDIENT = 'MOVE_BURGER_INGREDIENT';
export const RESET_BURGER_INGREDIENTS = 'RESET_BURGER_INGREDIENTS';

export const addBurgerIngredient = (ingredient) => (dispatch) => {
  dispatch({
    type: ADD_BURGER_INGREDIENT,
    ingredient: { uuid: uuidv4(), ...ingredient }
  });
}

export const moveBurgerIngredient = (dragIndex, hoverIndex) => (dispatch) => {
  dispatch({
    type: MOVE_BURGER_INGREDIENT,
    dragIndex,
    hoverIndex
  });
}

export const removeBurgerIngredient = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_BURGER_INGREDIENT,
    id
  });
}
