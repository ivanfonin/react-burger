import { PropTypes } from 'prop-types';

import styles from './IngredientDetails.module.css';

function IngredientDetails(props) {
  const { name, proteins, fat, carbohydrates, calories, image_large } = props;
  return (
    <>
      <div className={ `${styles.header} pl-10 pt-10 pr-10` }>
        <h3 className="text text_type_main-large pr-15">Детали ингредиента</h3>
      </div>
      <img className={ styles.image } src={ image_large } alt={ name } />
      <p className={ `${styles.name} text text_type_main-medium pl-25 pr-25 pt-4` }>{ name }</p>
      <ul className={ `${styles.details} pt-8 pl-25 pr-25 pb-15` }>
        <li className={ styles.detail }>
          <p className="text text_type_main-small text_color_inactive">Калории, ккал</p>
          <p className="text text_type_digits-default text_color_inactive pt-2">{ calories }</p>
        </li>
        <li className={ styles.detail }>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive pt-2">{ proteins }</p>
        </li>
        <li className={ styles.detail }>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive pt-2">{ fat }</p>
        </li>
        <li className={ styles.detail }>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive pt-2">{ carbohydrates }</p>
        </li>
      </ul>
    </>
  );
}

IngredientDetails.propTypes = {
  name: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  image_large: PropTypes.string.isRequired
}

export default IngredientDetails;