import { SET_ACTIVE_TAB } from '../actions/tabs';

import { TIngredientType } from '../types/data';

interface IAction {
  type: 'SET_ACTIVE_TAB';
  tab: TIngredientType;
}

type TState = TIngredientType;

const initialState = 'bun';

export const tabsReducer = (state: TState = initialState, action: IAction) => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return action.tab;
    }
    default:
      return state;
  }
};
