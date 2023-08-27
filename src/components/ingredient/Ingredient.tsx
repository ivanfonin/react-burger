import Price from '../price/Price';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';

import styles from './Ingredient.module.css';

import { TIngredient } from '../../services/types/data';

function Ingredient(ingredient: TIngredient) {
  const { name, image, price, counter } = ingredient;

  const [, drag] = useDrag({
    type: 'ingredient',
    item: ingredient,
  });

  return (
    <div ref={drag} draggable className={styles.item}>
      <Counter count={counter} size="default" />
      <figure>
        <img className={styles.image} src={image} alt={name} />
        <figcaption>
          <Price
            icon="primary"
            size="default"
            value={price}
            classes="pt-1 pb-1"
          />
          <p className="text text_type_main-default">{name}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Ingredient;
