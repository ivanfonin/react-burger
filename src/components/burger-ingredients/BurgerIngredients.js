import PropTypes from 'prop-types';
import Ingredient from '../ingredient/Ingredient';

function BurgerIngredients(props) {
  return (
    <section className="burger-ingredients">
      { props.ingredients.map(ingredient => <Ingredient { ...ingredient } />) }
    </section>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element,
    name: PropTypes.string,
    price: PropTypes.number,
    canBeDeleted: PropTypes.bool
  }))
}

export default BurgerIngredients;