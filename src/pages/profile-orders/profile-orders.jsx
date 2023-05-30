import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  wsConnectionClose,
  wsConnectionStart,
} from '../../services/actions/ws';
import { Loader } from '../../components/loader/loader';
import { ProfileNav } from '../../components/profile-nav/ProfileNav';
import { getCookie } from '../../utils/helpers';
import config from '../../utils/config';
const token = getCookie('token');

export const ProfileOrdersPage = () => {
  const { orders, wsRequest, wsConnected } = useSelector((state) => state.ws);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart(`${config.ws.baseUrl}/orders?token=${token}`));
    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);
  return (
    <>
      <section className="section section_size_small pt-30">
        <ProfileNav />

        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </section>
      <section className="section pt-30">
        {orders.map((order) => (
          <p>{order.name}</p>
        ))}
        {wsConnected && (
          <p className="text text_type_main-default text_color_inactive">
            Здесь будут заказы после выполнения второго этапа работ, ветка
            month-9/step-2. Соединено: {wsConnected.toString()}
          </p>
        )}
        {wsRequest ? (
          <Loader size="large" />
        ) : (
          <>
            <p className="text text_type_main-default text_color_inactive">
              Здесь будут заказы после выполнения второго этапа работ, ветка
              month-9/step-2.
            </p>
            {orders.map((order) => (
              <p>{order.name}</p>
            ))}
          </>
        )}
      </section>
    </>
  );
};
