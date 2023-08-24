import { PropTypes } from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

import styles from './Tabs.module.css';

function Tabs({ onTabClick }) {
  const active = useSelector((state) => state.tab);

  return (
    <nav className="pt-5">
      <ul className={styles.tabs}>
        <Tab value="bun" active={active === 'bun'} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab value="main" active={active === 'main'} onClick={onTabClick}>
          Начинки
        </Tab>
        <Tab value="sauce" active={active === 'sauce'} onClick={onTabClick}>
          Соусы
        </Tab>
      </ul>
    </nav>
  );
}

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
