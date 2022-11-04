import React from 'react';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

import data from '../../utils/data';

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <main className="app-main">
        <BurgerIngredients ingredients={ data } />
        <BurgerConstructor />
      </main>
    </React.Fragment>
  );
}

export default App;
