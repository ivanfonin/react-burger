import { ProfileNav } from '../../components/profile-nav/ProfileNav';

export const ProfileOrdersPage = () => {
  return (
    <>
      <section className="section section_size_small pt-30">
        <ProfileNav />

        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </section>
      <section className="section pt-30">Orders</section>
    </>
  );
};
