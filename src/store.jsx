import { configureStore } from '@reduxjs/toolkit';

import { burgerReducer } from './services/reducers/burger';
import { checkoutReducer } from './services/reducers/checkout';
import { ingredientReducer } from './services/reducers/ingredient';
import { ingredientsReducer } from './services/reducers/ingredients';
import { tabsReducer } from './services/reducers/tabs';
import { userReducer } from './services/reducers/user';

const store = configureStore({
  reducer: {
    burger: burgerReducer,
    checkout: checkoutReducer,
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer,
    tab: tabsReducer,
    user: userReducer,
  },
});

export default store;
