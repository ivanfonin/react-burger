import { PropTypes } from 'prop-types';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './Link.module.css';

function Link(props) {

  function getType() {
    return props.current ? 'primary' : 'secondary';
  }

  let icon;
  switch (props.icon) {
    case 'list': 
      icon = <ListIcon type={ getType() } />;
      break;
    case 'burger': 
      icon = <BurgerIcon type={ getType() } />;
      break;
    case 'profile':
      icon = <ProfileIcon type={ getType() } />;
      break;
    default: 
  }

  const linkClass = props.current ? `${styles.Link} ${styles.Link__active}` : styles.Link;

  return (
    <a href={ props.href } className={ `${linkClass} p-5` }>
      { icon } <span className='pl-2'>{ props.name }</span>
    </a>
  );
}

Link.propTypes = {
  current: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Link;