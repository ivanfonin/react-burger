import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../services/actions/orders';
import { Loader } from '../../components/loader/loader';
import { ProfileNav } from '../../components/profile-nav/ProfileNav';

export const ProfileOrdersPage = () => {
  const { ordersRequest } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
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
        {ordersRequest ? (
          <Loader size="large" />
        ) : (
          <p className="text text_type_main-default text_color_inactive">
            Здесь будут заказы после выполнения второго этапа работ, ветка
            month-9/step-2.
          </p>
        )}
      </section>
    </>
  );
};
