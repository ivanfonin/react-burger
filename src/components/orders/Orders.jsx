import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderItem from '../order-item/OrderItem';

function Orders() {
  const { orders } = useSelector((state) => state.ws);
  const { items } = useSelector((state) => state.ingredients);

  return orders && items ? (
    <ul>
      {orders.reverse().map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </ul>
  ) : (
    <p className="text text_type_main-default pt-5">
      У Вас еще нет заказов, соберите свой бургер в{' '}
      <Link className="link" to="/">
        конструкторе
      </Link>
      .
    </p>
  );
}

export default Orders;
