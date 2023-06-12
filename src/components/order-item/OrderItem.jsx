import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { parseStatus } from '../../utils/helpers';
import { PropTypes } from 'prop-types';
import Price from '../price/Price';

import styles from './OrderItem.module.css';

function OrderItem({ number, createdAt, name, status, ingredients }) {
  const { items } = useSelector((state) => state.ingredients);
  const { color, label } = parseStatus(status);
  let orderIngredients = items.filter((item) => ingredients.includes(item.id));
  const counter = orderIngredients.length - 6;
  orderIngredients.splice(6, Infinity);
  const total = orderIngredients.reduce((acc, i) => {
    if ('bun' === i.type) {
      return i.price * 2 + acc;
    } else {
      return i.price + acc;
    }
  }, 0);
  const navigate = useNavigate();
  const location = useLocation();
  const onClick = () => {
    navigate(`${location.pathname}/${number}`, {
      state: { background: location },
    });
  };

  return (
    <li className={styles.container} onClick={onClick}>
      <p className={`${styles.number} text text_type_digits-default`}>
        #{number}
      </p>
      <time
        className={`${styles.time} text text_type_main-default text_color_inactive`}
        dateTime={createdAt}
      >
        <FormattedDate date={new Date(createdAt)}></FormattedDate>
      </time>
      <p className={`${styles.name} text text_type_main-medium`} title={name}>
        {name}
      </p>
      <p className={`${styles.status} text text_type_main-small ${color}`}>
        {label}
      </p>
      <ul className={styles.ingredients}>
        {orderIngredients.map((i, index) => (
          <li key={i.id} className={styles.ingredient}>
            <img
              className={styles.img}
              src={i.image_mobile}
              alt={i.name}
              title={i.name}
            />
            {index === 5 ? (
              <p className={`${styles.counter} text text_type_digits-small`}>
                &nbsp;{counter}+
              </p>
            ) : null}
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
