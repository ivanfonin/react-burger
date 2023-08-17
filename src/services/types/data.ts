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
