import {
  SET_ACTIVE_TAB
} from '../actions/tabs';

const initialState = 'bun';

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return action.tab;
    }
    default: 
      return state;
  }
}