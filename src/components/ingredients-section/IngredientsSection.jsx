import Ingredient from '../ingredient/Ingredient';
import IngredientsSectionTitle from './ingredients-section-title/IngredientsSectionTitle';

import styles from './IngredientsSection.module.css';

function IngredientsSection({ type, ingredients }) {
  return (
    <section className={ `${type}` }>
      <IngredientsSectionTitle type={ type } />
      <ul className={ `${styles.list} pt-6 pl-4 pr-4 pb-0` }>
        { ingredients.map(ingredient => <li key={ ingredient._id }><Ingredient { ...ingredient } /></li> ) }
      </ul>
    </section>
  );
}

export default IngredientsSection;