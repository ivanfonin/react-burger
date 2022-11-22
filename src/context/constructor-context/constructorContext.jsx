import { createContext } from 'react';

export const ConstructorContext = createContext();

export const reducer = (state, action) => {
  if ('set' === action.type ) {
    state.ingredients = action.payload.filter(ingredient => ingredient.type !== 'bun');
    state.bun = action.payload.find(ingredient => ingredient.type === 'bun');
    return state;
  }

  if ('set-order' === action.type) {
    state.order = action.payload;
    return state;
  }

  throw new Error(`Wrong type of action: ${action.type}`);
}