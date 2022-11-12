import { PropTypes } from 'prop-types';

function IngredientsSectionTitle({ type }) {
  let name;
  switch (type) {
    case 'bun': 
      name ='Булки';
      break;
    case 'main': 
      name ='Начинки';
      break;
    case 'sauce':
      name ='Соусы';
      break;
    default: 
  }
  return (
    <h2 className="text text_type_main-medium pt-10">{ name }</h2>
  );
}

IngredientsSectionTitle.propTypes = {
  type: PropTypes.string.isRequired
}

export default IngredientsSectionTitle;