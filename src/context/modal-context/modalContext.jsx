import { createContext } from 'react';

export const ModalContext = createContext();

export const reducer = (state, action) => {
  if ('order' === action.type) {
    return { ...state, order: action.payload };
  }

  if ('ingredient' === action.type) {
    return { ...state, ingredient: action.payload };
  }

  if ('reset' === action.type) {
    return { order: null, ingredient: null };
  }

  throw new Error(`Wrong type of action: ${action.type}`);
}