import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../../components/price/Price';
import { Loader } from '../../components/loader/loader';
import { useEffect } from 'react';
import { fetchOrder } from '../../services/actions/order';
import { parseStatus } from '../../utils/helpers';

import styles from './order.module.css';

export const OrderPage = () => {
  const { id } = useParams();
  const { order, orderRequest } = useSelector((state) => state.order);
  const { items } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  const numberClass = background ? 'mt-8' : 'mt-30';

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, []);

  if (orderRequest) {
    return <Loader size="large" />;
  } else if (order) {
    const { color, label } = parseStatus(order.status);
    const orderIngredients = items.filter((item) =>
      order.ingredients.includes(item.id)
    );
    const total = orderIngredients.reduce((acc, i) => {
      if ('bun' === i.type) {
        return i.price * 2 + acc;
      } else {
        return i.price + acc;
      }
    }, 0);

    return (
      <section className={styles.order}>
        <header className={styles.header}>
          <p
            className={`${styles.number} ${numberClass} text text_type_digits-default`}
          >
            #{order.number}
          </p>
          {background ? (
            <h2 className="text text_type_main-medium">#{order.name}</h2>
          ) : (
            <h1 className="text text_type_main-medium">#{order.name}</h1>
          )}
          <p className={`${color} text text_type_main-default pt-2`}>{label}</p>
        </header>
        <p className="text text_type_main-medium pt-15 pb-6">Состав</p>
        <ul className={`${styles.ingredients} scroll-section`}>
          {orderIngredients.reverse().map((i, index) => (
            <li key={index} className={styles.ingredient}>
              <img className={styles.img} src={i.image_mobile} alt={i.name} />
              <p className="text text_type_main-default">{i.name}</p>
              <b className={`${styles.price} text text_type_digits-default`}>
                {i.type === 'bun' ? '2 x' : '1 x'}
                &nbsp;
                <Price
                  icon="primary"
                  size="small"
                  value={i.price}
                  classes="text text_type_digits-default"
                />
              </b>
            </li>
          ))}
        </ul>
        <footer className={`${styles.footer} pt-10 pb-10`}>
          <time
            className={`${styles.time} text text_type_main-default text_color_inactive`}
            dateTime={order.createdAt}
          >
            <FormattedDate date={new Date(order.createdAt)}></FormattedDate>
          </time>
          <Price
            icon="primary"
            size="small"
            value={total}
            classes="text text_type_digits-default"
          />
        </footer>
      </section>
    );
  }
};

export default OrderPage;
