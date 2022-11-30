import { PropTypes } from 'prop-types';
// import { useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

function Tabs({ onTabClick }) {
  const active = useSelector(state => state.tab);

  return (
    <nav className="pt-5">
      <ul style={{ display: "flex", margin: 0, padding: 0 }}>
        <Tab value="bun" active={ active === 'bun' } onClick={ onTabClick }>
          Булки
        </Tab>
        <Tab value="main" active={ active === 'main' } onClick={ onTabClick }>
          Начинки
        </Tab>
        <Tab value="sauce" active={ active === 'sauce' } onClick={ onTabClick }>
          Соусы
        </Tab>
      </ul>
    </nav>
  );
}

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired
}

export default Tabs;