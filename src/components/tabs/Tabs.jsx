import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function Tabs() {
  const [current, setCurrent] = useState('one');

  return (
    <nav className="pt-5">
      <ul style={{ display: "flex", margin: 0, padding: 0 }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
      </ul>
    </nav>
  );
}

export default Tabs;