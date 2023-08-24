import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Nav from './nav/Nav';
import ProfileButton from './profile-button/ProfileButton';

import styles from './AppHeader.module.css';
import { FC } from 'react';

export const AppHeader: FC = () => {
  return (
    <header className={`${styles.header} p-4`}>
      <div className={styles.header__container}>
        <Nav />
        <Logo />
        <ProfileButton />
      </div>
    </header>
  );
};

export default AppHeader;
