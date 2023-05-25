import { NavLink } from 'react-router-dom';

export const NotFound404 = () => {
  return (
    <section className="section section_form">
      <h1 className="text text_type_main-large">Ой</h1>
      <p className="text text_type_main-medium mt-10 mb-10">
        А такой странички у нас нет.. Хотите{' '}
        <NavLink className="text" to={'/'} style={{ color: 'white' }}>
          заказать бургер
        </NavLink>
        ?
      </p>
    </section>
  );
};
