import Tabs from '../tabs/Tabs';
import IngredientsSection from '../ingredients-section/IngredientsSection';
import { groupBy } from '../../utils/helpers';
import { ingredientPropTypes } from '../../utils/constants';

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
  ingredients: ingredientPropTypes
}

export default BurgerIngredients;