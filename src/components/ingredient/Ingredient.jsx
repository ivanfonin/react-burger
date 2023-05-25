import Price from '../price/Price';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropTypes } from '../../utils/constants';
import { useDrag } from 'react-dnd';

import styles from './Ingredient.module.css';

function Ingredient({ ingredient }) {
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

Ingredient.propTypes = {
  ingredient: ingredientPropTypes,
};

export default Ingredient;
