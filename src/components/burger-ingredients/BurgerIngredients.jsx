import Tabs from '../tabs/Tabs';
import IngredientsSection from '../ingredients-section/IngredientsSection';
import { groupBy } from '../../utils/helpers';
import { ingredientsPropTypes } from '../../utils/constants';
import { PropTypes } from 'prop-types';
import { createRef } from 'react';

import styles from './BurgerIngredients.module.css';

function BurgerIngredients({ ingredients, showIngredient }) {
  const tabRefs = [];
  const ingredientsSections = [];
  const groups = groupBy(ingredients, 'type');
  
  for (let type in groups) {
    tabRefs[type] = createRef();
    ingredientsSections.push(<IngredientsSection ref={ tabRefs[type] } key={ type } type={ type } ingredients={ groups[type] } showIngredient={ showIngredient } />);
  }

  const handleTabSelected = (type) => {
    tabRefs[type].current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <Tabs onTabClick={ handleTabSelected } />
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