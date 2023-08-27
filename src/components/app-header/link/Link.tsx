import { NavLink } from 'react-router-dom';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import linkStyles from './Link.module.css';

type THeaderLinkObject = {
  link: Partial<string>;
  name: String;
  icon: 'burger' | 'list' | 'profile';
  current?: boolean;
};

const Link = (props: THeaderLinkObject) => {
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
};

export default Link;
