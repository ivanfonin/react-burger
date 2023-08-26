import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

import { store } from '../../store';
import { TAuthActions } from '../actions/auth';
import { TBurgerActions } from '../actions/burger';
import { TCheckoutActions } from '../actions/checkout';
import { TIngredientActions } from '../actions/ingredient';
import { TIngredientsActions } from '../actions/ingredients';
import { TOrderActions } from '../actions/order';
import { TTabsActions } from '../actions/tabs';
import { TWsActions } from '../actions/ws';

type TApplicationActions =
  | TAuthActions
  | TBurgerActions
  | TBurgerActions
  | TCheckoutActions
  | TIngredientActions
  | TIngredientsActions
  | TOrderActions
  | TTabsActions
  | TWsActions;

export type TApiConfig = {
  baseUrl: string;
};

export interface IApi {
  get: (path: string, options: any) => any;
  post: (path: string, data: any, options: any) => any;
  patch: (path: string, data: any, options: any) => any;
}

export type TIcons =
  | 'EditIcon'
  | 'CurrencyIcon'
  | 'BurgerIcon'
  | 'LockIcon'
  | 'DragIcon'
  | 'DeleteIcon'
  | 'ArrowUpIcon'
  | 'ArrowDownIcon'
  | 'MenuIcon'
  | 'CloseIcon'
  | 'CheckMarkIcon'
  | 'ListIcon'
  | 'InfoIcon'
  | 'ShowIcon'
  | 'HideIcon'
  | 'LogoutIcon'
  | 'ProfileIcon';

export type TEventTarget = {
  type?: string;
  target: {
    value: string;
    name: string;
  };
};

export type TRegisterForm = {
  name: string;
  email: string;
  password: string;
};

export type TLoginForm = {
  email: string;
  password: string;
};

export type TProfileForm = TRegisterForm;

export type TForgotPasswordForm = {
  email: string;
};

export type TResetPasswordForm = {
  email: string;
  token: string;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
