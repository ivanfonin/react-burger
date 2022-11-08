import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Nav from '../nav/Nav';
import Profile from '../profile/Profile';

import styles from './AppHeader.module.css';

function AppHeader() {
  return (
    <header className={ `${styles.AppHeader} p-4` }>
      <div className={ styles.AppHeader__container }>
        <Nav />
        <Logo />
        <Profile />
      </div>
    </header>
  );
}

export default AppHeader;