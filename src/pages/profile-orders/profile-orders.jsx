import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  wsConnectionStart,
  wsConnectionClose,
} from '../../services/actions/ws';
import Orders from '../../components/orders/Orders';
import { Loader } from '../../components/loader/loader';
import { ProfileNav } from '../../components/profile-nav/ProfileNav';
import { getCookie } from '../../utils/helpers';
import config from '../../utils/config';

export const ProfileOrdersPage = () => {
  const { orders } = useSelector((state) => state.ws);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie('token'); // Заменить на localStorage, чтобы не перезагружаться
    if (!token) {
      window.location.reload();
    }
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
        {orders ? <Orders /> : <Loader size="large" />}
      </section>
    </>
  );
};
