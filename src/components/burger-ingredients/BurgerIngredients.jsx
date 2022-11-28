import Tabs from '../tabs/Tabs';
import IngredientsSection from '../ingredients-section/IngredientsSection';
import { Loader } from '../loader/loader';
import { groupBy } from '../../utils/helpers';
import { createRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

import styles from './BurgerIngredients.module.css';

function BurgerIngredients() {
  const { items, ingredientsRequest } = useSelector(state => state.ingredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const tabRefs = [];
  const ingredientsSections = [];
  const groups = groupBy(items, 'type');
  
  for (let type in groups) {
    tabRefs[type] = createRef();
    ingredientsSections.push(<IngredientsSection ref={ tabRefs[type] } key={ type } type={ type } ingredients={ groups[type] } />);
  }

  const handleTabSelected = (type) => {
    tabRefs[type]?.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <Tabs onTabClick={ handleTabSelected } />
      <div className={ `${styles.section}` }>
        { ingredientsRequest ? (
          <Loader size="large" />
        ) : (
          ingredientsSections
        ) }
      </div>
    </>
  );
}

export default BurgerIngredients;