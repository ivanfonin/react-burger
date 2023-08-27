import { combineReducers } from 'redux';

import { burgerReducer } from './burger';
import { checkoutReducer } from './checkout';
import { ingredientReducer } from './ingredient';
import { ingredientsReducer } from './ingredients';
import { tabsReducer } from './tabs';
import { authReducer } from './auth';
import { wsReducer } from './ws';
import { orderReducer } from './order';

const rootReducer = combineReducers({
  burger: burgerReducer,
  checkout: checkoutReducer,
  ingredient: ingredientReducer,
  ingredients: ingredientsReducer,
  tab: tabsReducer,
  auth: authReducer,
  ws: wsReducer,
  order: orderReducer,
});

export default rootReducer;
