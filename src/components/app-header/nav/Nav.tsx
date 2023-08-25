import Link from '../link/Link';
import { FunctionComponent } from 'react';
import { THeaderLinkObject } from '../../../services/types/data';

import styles from './Nav.module.css';

const links: THeaderLinkObject[] = [
  {
    link: '/',
    name: 'Конструктор',
    icon: 'burger',
  },
  {
    link: '/feed',
    name: 'Лента заказов',
    icon: 'list',
  },
];

const Nav: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      {links.map((link, index) => (
        <Link key={index.toString()} {...link} />
      ))}
    </nav>
  );
};

export default Nav;
