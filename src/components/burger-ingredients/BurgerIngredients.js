import Tabs from '../tabs/Tabs';
import IngredientsSection from '../ingredients-section/IngredientsSection';
import PropTypes from 'prop-types';
import { groupBy } from '../../utils/helpers';

import styles from './BurgerIngredients.module.css';

function BurgerIngredients({ ingredients }) {
  const groups = groupBy(ingredients, 'type');
  const ingredientsSections = [];
  for (let type in groups) {
    ingredientsSections.push(<IngredientsSection key={ type } type={ type } ingredients={ groups[type] } />);
  }
  return (
    <>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <Tabs />
      <div className={ `${styles.container} custom-scroll` }>
        { ingredientsSections }
      </div>
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
  }))
}

export default BurgerIngredients;