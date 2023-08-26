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
  uuid?: string;
};

export type TIngredientsSection = {
  type: TIngredientType;
  ingredients: ReadonlyArray<TIngredient>;
};

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
