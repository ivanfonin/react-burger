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
  const [ingredient, setIngredient] = useState({ selected: false, data: null });
  const [order, setOrder] = useState({ created: false, data: null });

  const handleCloseModal = () => {
    setIngredient({ selected: false, data: null });
    setOrder({ created: false, data: null });
  }

  const handleIngredientSelected = (ingredient) => {
    setIngredient({ selected: true, data: ingredient });
  }

  const handleOrderCreated = () => {
    setOrder({ created: true, data: { "_id": "034536" } });
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
      { ingredient.selected && ingredient.data &&
        <Modal onClose={ handleCloseModal }>
          <IngredientDetails { ...ingredient.data } />
        </Modal>
      }
      { order.created && order.data &&
        <Modal onClose={ handleCloseModal }>
          <OrderDetails { ...order.data } />
        </Modal>
      }
    </>
  );
}

export default App;
