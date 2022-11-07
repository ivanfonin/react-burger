import Link from '../link/Link';

import styles from './Nav.module.css';

const links = [
  {
    id: 1,
    href: '/',
    name: 'Конструктор',
    current: true,
    icon: 'burger'
  },
  {
    id: 2,
    href: '/orders',
    name: 'Лента заказов',
    current: false,
    icon: 'list'
  }
];

function Nav() {
  return (
    <nav className={ styles.nav }>
      { links.map((link, index) => <Link key={ index.toString() } { ...link } />) }
    </nav>
  );
}

export default Nav;