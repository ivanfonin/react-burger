import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { parseStatus } from '../../utils/helpers';
import { PropTypes } from 'prop-types';

import styles from './OrderItem.module.css';
import { useSelector } from 'react-redux';
import Price from '../price/Price';

function OrderItem({ number, updatedAt, name, status, ingredients }) {
  const { items } = useSelector((state) => state.ingredients);
  const { color, label } = parseStatus(status);
  const orderIngredients = items.filter((item) =>
    ingredients.includes(item.id)
  );

  return (
    <li className={styles.container}>
      <p className="text text_type_digits-default">#{number}</p>
      <date className="text text_type_main-default text_color_inactive">
        <FormattedDate date={new Date(updatedAt)}></FormattedDate>
      </date>
      <p className="text text_type_main-medium">{name}</p>
      <p className={`text text_type_main-small ${color}`}>{label}</p>
      <figure>
        <ul className={styles.ingredients}>
          {orderIngredients.map((i) => (
            <li key={i.id} className={styles.ingredient}>
              <img className={styles.img} src={i.image_mobile} alt={i.name} />
            </li>
          ))}
        </ul>
      </figure>
      <Price
        icon="primary"
        size="small"
        value={100}
        classes="text text_type_digits-default pr-10"
      />
    </li>
  );
}

OrderItem.propTypes = {
  number: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OrderItem;
