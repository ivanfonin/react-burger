import {
  ADD_BURGER_INGREDIENT,
  REMOVE_BURGER_INGREDIENT
} from '../actions/burger';

const initialState = {
  bun: {
    "_id": "60d3b41abdacab0026a733c6",
    "name": "Краторная булка N-200i",
    "type": "bun",
    "proteins": 80,
    "fat": 24,
    "carbohydrates": 53,
    "calories": 420,
    "price": 1255,
    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
    "__v": 0
  },
  ingredients: [
    {
      "_id": "60d3b41abdacab0026a733ce",
      "name": "Соус традиционный галактический",
      "type": "sauce",
      "proteins": 42,
      "fat": 24,
      "carbohydrates": 42,
      "calories": 99,
      "price": 15,
      "image": "https://code.s3.yandex.net/react/code/sauce-03.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-03-large.png",
      "__v": 0
    },
    {
      "_id": "60d3b41abdacab0026a733c8",
      "name": "Филе Люминесцентного тетраодонтимформа",
      "type": "main",
      "proteins": 44,
      "fat": 26,
      "carbohydrates": 85,
      "calories": 643,
      "price": 988,
      "image": "https://code.s3.yandex.net/react/code/meat-03.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
      "__v": 0
    },
    {
      "_id": "60d3b41abdacab0026a733ca",
      "name": "Говяжий метеорит (отбивная)",
      "type": "main",
      "proteins": 800,
      "fat": 800,
      "carbohydrates": 300,
      "calories": 2674,
      "price": 3000,
      "image": "https://code.s3.yandex.net/react/code/meat-04.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
      "__v": 0
    },
    {
      "_id": "60d3b41abdacab0026a733cf",
      "name": "Соус с шипами Антарианского плоскоходца",
      "type": "sauce",
      "proteins": 101,
      "fat": 99,
      "carbohydrates": 100,
      "calories": 100,
      "price": 88,
      "image": "https://code.s3.yandex.net/react/code/sauce-01.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-01-large.png",
      "__v": 0
    },
    {
      "_id": "60d3b41abdacab0026a733d2",
      "name": "Кристаллы марсианских альфа-сахаридов",
      "type": "main",
      "proteins": 234,
      "fat": 432,
      "carbohydrates": 111,
      "calories": 189,
      "price": 762,
      "image": "https://code.s3.yandex.net/react/code/core.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/core-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/core-large.png",
      "__v": 0
    }
  ],
  total: 7363
}

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      let bun = state.bun;
      let ingredients = state.ingredients;

      if ('bun' === action.ingredient.type && !bun) {
        bun = action.ingredient;
      } else {
        throw new Error('Можно добавить только одну булочку в конструктор.');
      }

      if ('bun' !== action.ingredient.type) {
        ingredients.push(action.ingredient);
      }

      return {
        bun,
        ingredients,
        total: bun?.price * 2 + ingredients?.reduce((acc, item) => item.price + acc, 0)
      }
    }
    case REMOVE_BURGER_INGREDIENT: {
      return {
        
      }
    }
    default:
      return state;
  }
}