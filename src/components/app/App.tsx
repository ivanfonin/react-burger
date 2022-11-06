import AppHeader from '../app-header/AppHeader';
import Section from '../section/Section';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import { data as ingredients } from '../../utils/data';

import styles from './App.module.css';

function App() {
  return (
    <>
      <AppHeader />
      <main className={ `${styles.App} pt-10` }>
        <Section>
          <BurgerIngredients ingredients={ ingredients } />
        </Section>
        <Section>
          <BurgerConstructor ingredients={ ingredients } />
        </Section>
      </main>
    </>
  );
}

export default App;
