import { store } from '../../store';

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

export type TInputValues = {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
};

export type TEventTarget = {
  type?: string;
  target: {
    value: string;
    name: string;
  };
};

export type AppDispatch = typeof store.dispatch;
