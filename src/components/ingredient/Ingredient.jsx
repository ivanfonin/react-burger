import { PropTypes } from 'prop-types';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropTypes } from '../../utils/constants';
import Price from '../price/Price';

import styles from './Ingredient.module.css';

function Ingredient({ ingredient, showIngredient }) {
  const { name, image, price } = ingredient;

  const handleIngredientClick = () => {
    showIngredient(ingredient);
  }

  return (
    <>
      <div className={ styles.item } onClick={ handleIngredientClick }>
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

Ingredient.propTypes = {
  ingredient: ingredientPropTypes,
  showIngredient: PropTypes.func.isRequired
}

export default Ingredient;