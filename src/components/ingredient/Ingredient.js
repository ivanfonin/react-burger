import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './Ingredient.module.css';

function Ingredient({ name, price, image }) {
  return (
    <div className={ styles.item }>
      {/* <Counter count={1} size="default" /> */}
      <img src={ image } alt={ name } />
      <div className={ `${styles.item__price} pt-1 pb-1` }>
        <p className="text text_type_digits-default pr-2">{ price }</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">
        { name }
      </p>
    </div>
  );
}

export default Ingredient;