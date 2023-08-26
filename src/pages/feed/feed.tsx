import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import {
  wsConnectionClose,
  wsConnectionStart,
} from '../../services/actions/ws';
import config from '../../utils/config';
import Orders from '../../components/orders/Orders';
import { Loader } from '../../components/loader/loader';
import { Scoreboard } from '../../components/scoreboard/Scoreboard';

export const FeedPage = () => {
  const { orders } = useSelector((state) => state.ws);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart(`${config.ws.baseUrl}/orders/all`));
    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return (
    <>
      <section className="section pt-10">
        <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
        {orders && orders.length ? <Orders /> : <Loader size="large" />}
      </section>
      <section className="section pt-10">
        <Scoreboard />
      </section>
    </>
  );
};
