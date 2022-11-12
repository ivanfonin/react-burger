import Tabs from '../tabs/Tabs';
import IngredientsSection from '../ingredients-section/IngredientsSection';
import { groupBy } from '../../utils/helpers';
import { ingredientsPropTypes } from '../../utils/constants';
import { PropTypes } from 'prop-types';

import styles from './BurgerIngredients.module.css';

function BurgerIngredients({ ingredients, showIngredient }) {
  const groups = groupBy(ingredients, 'type');
  const ingredientsSections = [];
  for (let type in groups) {
    ingredientsSections.push(<IngredientsSection key={ type } type={ type } ingredients={ groups[type] } showIngredient={ showIngredient } />);
  }
  return (
    <>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <Tabs />
      <div className={ `${styles.section}` }>
        { ingredientsSections }
      </div>
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: ingredientsPropTypes,
  showIngredient: PropTypes.func.isRequired
}

export default BurgerIngredients;