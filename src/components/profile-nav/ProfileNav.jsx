import { useDispatch } from 'react-redux';
import { logout } from '../../services/actions/auth';
import { NavLink } from 'react-router-dom';

import styles from './ProfileNav.module.css';

export const ProfileNav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const getLinkClass = ({ isActive, isPending }) =>
    isPending
      ? styles.link
      : isActive
      ? `${styles.link} ${styles.link_active}`
      : styles.link;

  return (
    <nav className={styles.nav}>
      <NavLink to={'/profile'} className={getLinkClass} end>
        <span className="text text_type_main-medium">Профиль</span>
      </NavLink>
      <NavLink to={'/profile/orders'} className={getLinkClass}>
        <span className="text text_type_main-medium">История заказов</span>
      </NavLink>
      <button type="button" className={styles.link} onClick={handleLogout}>
        <span className="text text_type_main-medium">Выход</span>
      </button>
    </nav>
  );
};
