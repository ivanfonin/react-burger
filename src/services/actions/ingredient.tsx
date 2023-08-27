import { TIngredient } from '../types/data';

export const SET_INGREDIENT: 'SET_INGREDIENT' = 'SET_INGREDIENT';

interface ISetIngredient {
  readonly type: typeof SET_INGREDIENT;
  ingredient: TIngredient;
}

export type TIngredientActions = ISetIngredient;
