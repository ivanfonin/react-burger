export type TApiConfig = {
  baseUrl: string;
};

export interface IApi {
  get: (path: string, options: any) => any;
  post: (path: string, data: any, options: any) => any;
  patch: (path: string, data: any, options: any) => any;
}

export type TResponseJson = {
  success: boolean;
  data?: any;
  message?: string;
};

export type TResponse = {
  body: any;
  bodyUsed: boolean;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
  json(): Promise<TResponseJson>;
};

export type TIngredientType = 'bun' | 'main' | 'sauce';

export type TServerIngredient = {
  _id: string;
  name: string;
  type: TIngredientType;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TIngredient = Omit<TServerIngredient, '_id'> & {
  id: string;
  counter: number;
};

export type TIngredientsSection = {
  type: TIngredientType;
  ingredients: ReadonlyArray<TIngredient>;
};

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

export type THeaderLinkObject = {
  link: Partial<string>;
  name: String;
  icon: 'burger' | 'list' | 'profile';
  current?: boolean;
};

export type TLoaderIconType = {
  color: string;
  size: Required<number>;
};

export type TTabsType = {
  onTabClick: (value: string) => void;
};

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

export type TOrderOwner = {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type TOrder = {
  ingredients: TServerIngredient[];
  _id: string;
  owner: TOrderOwner;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  price: number;
};
