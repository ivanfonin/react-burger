import { createContext } from 'react';

export const ConstructorContext = createContext();

export const reducer = (state, action) => {
  if ('set' === action.type ) {
    state.ingredients = action.payload.filter(ingredient => ingredient.type !== 'bun');
    state.bun = action.payload.find(ingredient => ingredient.type === 'bun');
    return state;
  }

  throw new Error(`Wrong type of action: ${action.type}`);
}