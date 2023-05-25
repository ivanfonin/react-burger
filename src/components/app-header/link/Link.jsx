import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import linkStyles from './Link.module.css';

function Link(props) {
  function getType() {
    return props.current ? 'primary' : 'secondary';
  }

  let icon;
  switch (props.icon) {
    case 'list':
      icon = <ListIcon type={getType()} />;
      break;
    case 'burger':
      icon = <BurgerIcon type={getType()} />;
      break;
    case 'profile':
      icon = <ProfileIcon type={getType()} />;
      break;
    default:
  }

  return (
    <NavLink
      to={props.link}
      className={({ isActive, isPending }) =>
        isPending
          ? `${linkStyles.Link} text text_type_main-default pl-2 p-5`
          : isActive
          ? `${linkStyles.Link} ${linkStyles.Link__active} text text_type_main-default pl-2 p-5`
          : `${linkStyles.Link} text text_type_main-default pl-2 p-5`
      }
    >
      {icon} <span className="pl-2">{props.name}</span>
    </NavLink>
  );
}

Link.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Link;
