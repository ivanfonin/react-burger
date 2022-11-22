import { createContext } from 'react';

export const IngredientsContext = createContext();

export const reducer = (state, action) => {
  if ('set' === action.type ) {
    return { ingredients: action.payload };
  }
  
  throw new Error(`Wrong type of action: ${action.type}`);
}