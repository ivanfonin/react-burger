import { useSelector } from 'react-redux';
import doneImagePath from '../../images/done.svg';

import styles from './OrderDetails.module.css';

function OrderDetails() {
  const { order, orderRequest } = useSelector(state => state.checkout);
  return (
    <div className={ styles.container }>
      <h3 className={ `${styles.number} text text_type_digits-large` }>{ order.number }</h3>
      <p className="text text_type_main-medium pt-8">идентификатор заказа</p>
      <img className="pt-15" src={ doneImagePath } alt="Иконка «Готово»" width="120" height="120" />
      <p className="pt-15 text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="pt-2 text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

export default OrderDetails;