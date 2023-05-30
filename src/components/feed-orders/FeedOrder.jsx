import { useSelector } from 'react-redux';
import { FeedOrder } from './feed-order/FeedOrder';

export const FeedOrders = () => {
  const { orders } = useSelector((state) => state.orders);

  return orders.map((order) => <FeedOrder {...order}></FeedOrder>);
};
