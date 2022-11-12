import Ingredient from '../ingredient/Ingredient';
import IngredientsSectionTitle from './ingredients-section-title/IngredientsSectionTitle';
import { ingredientsPropTypes } from '../../utils/constants';
import { PropTypes } from 'prop-types';

import styles from './IngredientsSection.module.css';

function IngredientsSection({ type, ingredients, showIngredient }) {
  return (
    <section className={ type }>
      <IngredientsSectionTitle type={ type } />
      <ul className={ `${styles.list} pt-6 pl-4 pr-4 pb-0` }>
        { ingredients.map(ingredient => {
          return (
            <li className={ styles.item } key={ ingredient._id }>
              <Ingredient ingredient={ ingredient } showIngredient={ showIngredient } />
            </li>
          );
        } ) }
      </ul>
    </section>
  );
}

IngredientsSection.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: ingredientsPropTypes,
  showIngredient: PropTypes.func.isRequired
}

export default IngredientsSection;