import { combineReducers } from 'redux';

import { burgerReducer } from './burger';
import { checkoutReducer } from './checkout';
import { ingredientReducer } from './ingredient';
import { ingredientsReducer } from './ingredients';
import { tabsReducer } from './tabs';
import { authReducer } from './auth';
import { ordersReducer } from './orders';

const rootReducer = combineReducers({
  burger: burgerReducer,
  checkout: checkoutReducer,
  ingredient: ingredientReducer,
  ingredients: ingredientsReducer,
  tab: tabsReducer,
  auth: authReducer,
  orders: ordersReducer,
});

export default rootReducer;
