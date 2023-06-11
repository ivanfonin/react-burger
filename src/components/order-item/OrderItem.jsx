import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { parseStatus } from '../../utils/helpers';
import { PropTypes } from 'prop-types';

import styles from './OrderItem.module.css';
import { useSelector } from 'react-redux';
import Price from '../price/Price';

function OrderItem({ number, createdAt, name, status, ingredients }) {
  const { items } = useSelector((state) => state.ingredients);
  const { color, label } = parseStatus(status);
  const orderIngredients = items.filter((item) =>
    ingredients.includes(item.id)
  );
  const total = orderIngredients.reduce((acc, i) => {
    if ('bun' === i.type) {
      return i.price * 2 + acc;
    } else {
      return i.price + acc;
    }
  }, 0);

  return (
    <li className={styles.container}>
      <p className={`${styles.number} text text_type_digits-default`}>
        #{number}
      </p>
      <time
        className={`${styles.time} text text_type_main-default text_color_inactive`}
        dateTime={createdAt}
      >
        <FormattedDate date={new Date(createdAt)}></FormattedDate>
      </time>
      <p className={`${styles.name} text text_type_main-medium`}>{name}</p>
      <p className={`${styles.status} text text_type_main-small ${color}`}>
        {label}
      </p>
      <ul className={styles.ingredients}>
        {orderIngredients.map((i) => (
          <li key={i.id} className={styles.ingredient}>
            <img className={styles.img} src={i.image_mobile} alt={i.name} />
          </li>
        ))}
      </ul>
      <Price
        icon="primary"
        size="small"
        value={total}
        classes={`${styles.price} text text_type_digits-default`}
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
