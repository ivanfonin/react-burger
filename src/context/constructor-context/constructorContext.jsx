import { createContext } from 'react';

export const ConstructorContext = createContext();

export const reducer = (state, action) => {
  if ('set' === action.type ) {
    state.ingredients = action.payload.filter(ingredient => ingredient.type !== 'bun');
    state.bun = action.payload.find(ingredient => ingredient.type === 'bun');
    state.total = state.bun?.price * 2 + state.ingredients?.reduce((prev, current) => current.price + prev, 0);
    return state;
  }

  throw new Error(`Wrong type of action: ${action.type}`);
}