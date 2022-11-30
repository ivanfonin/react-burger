import { combineReducers } from 'redux';

import { burgerReducer } from './burger';
import { checkoutReducer } from './checkout';
import { ingredientReducer } from './ingredient';
import { ingredientsReducer } from './ingredients';
import { tabsReducer } from './tabs';

const rootReducer = combineReducers({
  burger: burgerReducer,
  checkout: checkoutReducer,
  ingredient: ingredientReducer,
  ingredients: ingredientsReducer,
  tab: tabsReducer,
});

export default rootReducer;