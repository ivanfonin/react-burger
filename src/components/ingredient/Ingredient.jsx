import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../price/Price';

import styles from './Ingredient.module.css';

function Ingredient({ ingredient, showIngredient }) {
  const { name, image, price } = ingredient;

  const f = () => {
    showIngredient(ingredient);
  }

  return (
    <>
      <div className={ styles.item } onClick={ f }>
        <Counter count={1} size="default" />
        <figure>
          <img className={ styles.image } src={ image } alt={ name }/>
          <figcaption>
            <Price icon="primary" size="default" value={ price } classes='pt-1 pb-1' />
            <p className="text text_type_main-default">
              { name }
            </p>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default Ingredient;