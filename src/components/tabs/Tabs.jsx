import { useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function Tabs({ onTabClick }) {
  const [current, setCurrent] = useState('bun');

  useEffect(() => {
    onTabClick(current);
  }, [current]);

  return (
    <nav className="pt-5">
      <ul style={{ display: "flex", margin: 0, padding: 0 }}>
        <Tab value="bun" active={ current === 'bun' } onClick={ setCurrent }>
          Булки
        </Tab>
        <Tab value="main" active={ current === 'main' } onClick={ setCurrent }>
          Начинки
        </Tab>
        <Tab value="sauce" active={ current === 'sauce' } onClick={ setCurrent }>
          Соусы
        </Tab>
      </ul>
    </nav>
  );
}

export default Tabs;