import Price from '../price/Price';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './Ingredient.module.css';

function Ingredient({ name, price, image }) {
  return (
    <div className={ styles.item }>
      <Counter count={1} size="default" />
      <figure>
        <img src={ image } alt={ name } />
        <figcaption>
          <Price icon="primary" size="default" value={ price } classes='pt-1 pb-1' />
          <p className="text text_type_main-default">
            { name }
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Ingredient;