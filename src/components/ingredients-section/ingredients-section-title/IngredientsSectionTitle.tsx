import { TIngredientType } from '../../../services/types/data';

function IngredientsSectionTitle({ type }: { type: TIngredientType }) {
  let name;
  switch (type) {
    case 'bun':
      name = 'Булки';
      break;
    case 'main':
      name = 'Начинки';
      break;
    case 'sauce':
      name = 'Соусы';
      break;
    default:
  }
  return <h2 className="text text_type_main-medium pt-10">{name}</h2>;
}

export default IngredientsSectionTitle;
