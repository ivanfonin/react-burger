import { TTabsActions } from '../actions/tabs';
import { SET_ACTIVE_TAB } from '../actions/tabs';
import { TIngredientType } from '../types/data';

type TState = TIngredientType;

const initialState: TState = 'bun';

export const tabsReducer = (
  state = initialState,
  action: TTabsActions
): TState => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return action.tab;
    }
    default:
      return state;
  }
};
