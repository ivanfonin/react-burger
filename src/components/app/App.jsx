import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import config from '../../utils/config';
import { Api } from '../api/Api';
import { useState, useEffect } from 'react';

import styles from './App.module.css';

function App() {
  const server = new Api(config.api);
  const [ingredients, setIngredients] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    server.get('/ingredients')
      .then((res) => setIngredients(res.data));
  }, []);

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
          { ingredients && <BurgerIngredients ingredients={ ingredients } showIngredient={ handleIngredientSelected } /> }
        </section>
        <section className={ styles.section }>
          { ingredients && <BurgerConstructor ingredients={ ingredients } createOrder={ handleOrderCreated } /> }
        </section>
      </main>
      { ingredient && (
        <Modal onClose={ handleCloseModal }>
          <IngredientDetails { ...ingredient } />
        </Modal>
      ) }
      { order && (
        <Modal onClose={ handleCloseModal }>
          <OrderDetails { ...order } />
        </Modal>
      ) }
    </>
  );
}

export default App;
