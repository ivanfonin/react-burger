export type TApiConfig = {
  baseUrl: string;
};

export interface IApi {
  readonly _config: any;
  _checkResponse: any;
  _request: any;
  get: (path: string, options: any) => any;
  post: (path: string, data: any, options: any) => any;
  patch: (path: string, data: any, options: any) => any;
}

export type TResponseJson = {
  success: boolean;
  data: any;
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
  target: {
    value: string;
    name: string;
  };
};
