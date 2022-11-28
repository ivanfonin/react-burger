import Ingredient from '../ingredient/Ingredient';
import IngredientsSectionTitle from './ingredients-section-title/IngredientsSectionTitle';
import { ingredientsPropTypes } from '../../utils/constants';
import { PropTypes } from 'prop-types';
import { forwardRef } from 'react';

import styles from './IngredientsSection.module.css';

const IngredientsSection = forwardRef(({ type, ingredients }, ref) => {
  return (
    <section className={ type } ref={ ref }>
      <IngredientsSectionTitle type={ type } />
      <ul className={ `${styles.list} pt-6 pl-4 pr-4 pb-0` }>
        { ingredients.map(ingredient => {
          return (
            <li className={ styles.item } key={ ingredient._id }>
              <Ingredient ingredient={ ingredient } />
            </li>
          );
        } ) }
      </ul>
    </section>
  );
});

IngredientsSection.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: ingredientsPropTypes
}

export default IngredientsSection;