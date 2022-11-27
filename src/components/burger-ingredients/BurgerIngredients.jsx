import Tabs from '../tabs/Tabs';
import IngredientsSection from '../ingredients-section/IngredientsSection';
import { groupBy } from '../../utils/helpers';
import { PropTypes } from 'prop-types';
import { createRef } from 'react';
import { useSelector } from 'react-redux';

import styles from './BurgerIngredients.module.css';

function BurgerIngredients({ showIngredient }) {
  const { items } = useSelector(state => state.ingredients);
  const tabRefs = [];
  const ingredientsSections = [];
  const groups = groupBy(items, 'type');
  
  for (let type in groups) {
    tabRefs[type] = createRef();
    ingredientsSections.push(<IngredientsSection ref={ tabRefs[type] } key={ type } type={ type } ingredients={ groups[type] } showIngredient={ showIngredient } />);
  }

  const handleTabSelected = (type) => {
    tabRefs[type]?.current.scrollIntoView({ behavior: 'smooth' });
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
  showIngredient: PropTypes.func.isRequired
}

export default BurgerIngredients;