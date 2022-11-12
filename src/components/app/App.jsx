import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import { data as ingredients } from '../../utils/data';
import { useState } from 'react';

import styles from './App.module.css';

function App() {
  const [ingredient, setIngredient] = useState(null);
  const [order, setOrder] = useState(null);

  const handleCloseModal = () => {
    setIngredient(null);
    setOrder(null);
  }

  const handleIngredientSelected = (ingredient) => {
    setIngredient(ingredient);
  }

  const handleOrderCreated = () => {
    setOrder({ "_id": "034536" });
  }

  return (
    <>
      <AppHeader />
      <main className={ `${styles.main} pt-10` }>
        <section className={ styles.section }>
          <BurgerIngredients ingredients={ ingredients } showIngredient={ handleIngredientSelected } />
        </section>
        <section className={ styles.section }>
          <BurgerConstructor ingredients={ ingredients } createOrder={ handleOrderCreated } />
        </section>
      </main>
      { ingredient && (
        <Modal onClose={ handleCloseModal }>
          <IngredientDetails { ...ingredient } />
        </Modal>
      ) }
      { order && (
        <Modal onClose={ handleCloseModal }>
          <OrderDetails { ...order.data } />
        </Modal>
      ) }
    </>
  );
}

export default App;
