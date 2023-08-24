import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { TTabsType } from '../../services/types/data';

import styles from './Tabs.module.css';

function Tabs({ onTabClick }: TTabsType) {
  const active = useSelector((state: any) => state.tab);

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

export default Tabs;
