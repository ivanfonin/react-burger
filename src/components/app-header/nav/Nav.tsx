import Link from '../link/Link';
import { FunctionComponent } from 'react';

import styles from './Nav.module.css';

type THeaderLinkObject = {
  link: Partial<string>;
  name: String;
  icon: 'burger' | 'list' | 'profile';
  current?: boolean;
};

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
