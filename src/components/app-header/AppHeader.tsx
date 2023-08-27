import { FunctionComponent } from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Nav from './nav/Nav';
import ProfileButton from './profile-button/ProfileButton';

import styles from './AppHeader.module.css';

export const AppHeader: FunctionComponent = () => {
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
