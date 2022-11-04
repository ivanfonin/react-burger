import Link from '../link/Link';

const links = [
  {
    href: '/',
    name: 'Конструктор',
    current: true,
    icon: 'burger'
  },
  {
    href: '/orders',
    name: 'Лента заказов',
    current: false,
    icon: 'list'
  }
];

function Nav() {
  return (
    <nav className="app-nav">
      { links.map(link => <Link { ...link } />) }
    </nav>
  );
}

export default Nav;