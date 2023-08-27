import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { parseStatus } from '../../utils/helpers';
import { TIngredient, TOrder } from '../../services/types/data';
import Price from '../price/Price';
import { getIngredients } from '../../utils/storeHelpers';

import styles from './OrderItem.module.css';

function OrderItem({ number, createdAt, name, status, ingredients }: TOrder) {
  const { items } = useSelector(getIngredients);
  const { color, label } = parseStatus(status);
  let orderIngredients: Array<TIngredient> = items.filter((item: TIngredient) =>
    ingredients.includes(item.id)
  );
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

export default OrderItem;
