import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ProfileButton.module.css';
import linkStyles from '../link/Link.module.css';

const ProfileButton: FC = () => {
  return (
    <div className={styles.profile}>
      <NavLink
        to={'/profile'}
        className={({ isActive, isPending }) =>
          isPending
            ? linkStyles.Link
            : isActive
            ? `${linkStyles.Link} ${linkStyles.Link__active}`
            : linkStyles.Link
        }
      >
        <ProfileIcon type="primary" />{' '}
        <span className="pl-2">Личный кабинет</span>
      </NavLink>
    </div>
  );
};

export default ProfileButton;
