import { NavLink } from 'react-router-dom';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ProfileButton.module.css';
import linkStyles from '../link/Link.module.css';

function ProfileButton() {
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
        <ProfileIcon /> <span className="pl-2">Личный кабинет</span>
      </NavLink>
    </div>
  );
}

export default ProfileButton;
