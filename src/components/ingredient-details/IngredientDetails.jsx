import { useContext } from 'react';
import { ModalContext } from '../../context/modal-context/modalContext';

import styles from './IngredientDetails.module.css';

function IngredientDetails() {
  const { modalState } = useContext(ModalContext);
  const { name, proteins, fat, carbohydrates, calories, image_large } = modalState.ingredient;
  return (
    <>
      <div className={ `${styles.header} pl-10 pt-10 pr-10` }>
        <h3 className="text text_type_main-large pr-15">Детали ингредиента</h3>
      </div>
      <img className={ styles.image } src={ image_large } alt={ name } width="480" height="240" />
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

export default IngredientDetails;