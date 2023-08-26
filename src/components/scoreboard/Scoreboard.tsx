import { useSelector } from 'react-redux';
import { ReactNode, useMemo } from 'react';

import styles from './Scoreboard.module.css';

import { TOrder } from '../../services/types/data';

export const Scoreboard = () => {
  const { orders, total, totalToday } = useSelector((state: any) => state.ws);
  const doneOrders = useMemo<Array<ReactNode>>(() => {
    return orders
      ?.filter((order: TOrder) => order.status === 'done')
      .map((order: TOrder) => (
        <p
          key={order.number}
          className="text text_type_digits-default text_color_success"
        >
          {order.number}
        </p>
      ));
  }, [orders]);
  const activeOrders = useMemo(() => {
    return orders
      ?.filter(
        (order: TOrder) =>
          order.status === 'pending' || order.status === 'created'
      )
      .map((order: TOrder) => (
        <p key={order.number} className="text text_type_digits-default">
          {order.number}
        </p>
      ));
  }, [orders]);

  return (
    <section className="pt-15">
      <div className={styles['current-orders']}>
        {doneOrders && doneOrders.length > 0 && (
          <div className={styles.done}>
            <p className="text text_type_main-medium mb-6">Готовы:</p>
            <div className={styles.numbers}>{doneOrders}</div>
          </div>
        )}
        {activeOrders && activeOrders.length > 0 && (
          <div className={styles.active}>
            <p className="text text_type_main-medium mb-6">В работе:</p>
            <div className={styles.numbers}>{activeOrders}</div>
          </div>
        )}
      </div>
      <div className={styles.total}>
        <p className="text text_type_main-medium mt-15">
          Выполнено за все время:
        </p>
        <p className={`${styles.shine} text text_type_digits-large`}>{total}</p>
      </div>
      <div className={styles.total}>
        <p className="text text_type_main-medium mt-15">
          Выполнено за сегодня:
        </p>
        <p className={`${styles.shine} text text_type_digits-large`}>
          {totalToday}
        </p>
      </div>
    </section>
  );
};
