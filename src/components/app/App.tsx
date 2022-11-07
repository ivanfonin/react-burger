import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import { data as ingredients } from '../../utils/data';

import styles from './App.module.css';

function App() {
  return (
    <>
      <AppHeader />
      <main className={ `${styles.App} pt-10` }>
        <section className={ styles.App__section }>
          <BurgerIngredients ingredients={ ingredients } />
        </section>
        <section className={ styles.App__section }>
          <BurgerConstructor ingredients={ ingredients } />
        </section>
      </main>
    </>
  );
}

export default App;
