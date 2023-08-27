import { v4 as uuidv4 } from 'uuid';
import { TIngredient } from '../types/data';
import { AppDispatch, AppThunk } from '../types';

export const ADD_BURGER_INGREDIENT: 'ADD_BURGER_INGREDIENT' =
  'ADD_BURGER_INGREDIENT';
export const REMOVE_BURGER_INGREDIENT: 'REMOVE_BURGER_INGREDIENT' =
  'REMOVE_BURGER_INGREDIENT';
export const MOVE_BURGER_INGREDIENT: 'MOVE_BURGER_INGREDIENT' =
  'MOVE_BURGER_INGREDIENT';
export const RESET_BURGER_INGREDIENTS: 'RESET_BURGER_INGREDIENTS' =
  'RESET_BURGER_INGREDIENTS';

interface IAddBurgerIngredient {
  readonly type: typeof ADD_BURGER_INGREDIENT;
  ingredient: TIngredient;
}
interface IRemoveBurgerIngredient {
  readonly type: typeof REMOVE_BURGER_INGREDIENT;
  id: string;
}
interface IMoveBurgerIngredient {
  readonly type: typeof MOVE_BURGER_INGREDIENT;
  dragIndex: number;
  hoverIndex: number;
}
interface IResetBurgerIngredients {
  readonly type: typeof RESET_BURGER_INGREDIENTS;
}

export type TBurgerActions =
  | IAddBurgerIngredient
  | IRemoveBurgerIngredient
  | IMoveBurgerIngredient
  | IResetBurgerIngredients;

export const addBurgerIngredient: AppThunk =
  (ingredient: TIngredient) => (dispatch: AppDispatch) => {
    dispatch({
      type: ADD_BURGER_INGREDIENT,
      ingredient: { uuid: uuidv4(), ...ingredient },
    });
  };

export const moveBurgerIngredient: AppThunk =
  (dragIndex: number, hoverIndex: number) => (dispatch: AppDispatch) => {
    dispatch({
      type: MOVE_BURGER_INGREDIENT,
      dragIndex,
      hoverIndex,
    });
  };

export const removeBurgerIngredient: AppThunk =
  (id: string) => (dispatch: AppDispatch) => {
    dispatch({
      type: REMOVE_BURGER_INGREDIENT,
      id,
    });
  };
