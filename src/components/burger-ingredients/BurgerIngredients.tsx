import Tabs from '../tabs/Tabs';
import IngredientsSection from '../ingredients-section/IngredientsSection';
import { Loader } from '../loader/loader';
import { groupBy } from '../../utils/helpers';
import { createRef } from 'react';
import { useSelector } from '../../services/hooks';

function BurgerIngredients() {
  const { items, ingredientsRequest } = useSelector(
    (state) => state.ingredients
  );

  const tabRefs: any = [];
  const ingredientsSections = [];
  const groups = groupBy(items, 'type');

  for (let type in groups) {
    tabRefs[type] = createRef();
    ingredientsSections.push(
      <IngredientsSection
        ref={tabRefs[type]}
        key={type}
        type={type}
        ingredients={groups[type]}
      />
    );
  }

  const handleTabSelected = (type: string) => {
    tabRefs[type]?.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <Tabs onTabClick={handleTabSelected} />
      <div className="burger-ingredients scroll-section">
        {ingredientsRequest ? <Loader size="large" /> : ingredientsSections}
      </div>
    </>
  );
}

export default BurgerIngredients;
