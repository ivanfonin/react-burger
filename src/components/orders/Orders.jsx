import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderItem from '../order-item/OrderItem';

import styles from './Orders.module.css';

function Orders() {
  const { orders } = useSelector((state) => state.ws);
  const { items } = useSelector((state) => state.ingredients);

  return orders && items ? (
    <ul className={`${styles.orders} scroll-section`}>
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </ul>
  ) : (
    <p className="text text_type_main-default pt-5">
      У Вас еще нет заказов, соберите свой первый бургер в{' '}
      <Link className="link" to="/">
        конструкторе
      </Link>
      .
    </p>
  );
}

export default Orders;
