import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import { useSelector, useDispatch } from 'react-redux';
import { RESET_ORDER } from '../../services/actions/checkout';
import { RESET_INGREDIENT } from '../../services/actions/ingredient';

import styles from './App.module.css';

function App() {
  const { ingredient, order } = useSelector(state => ({
    ingredient: state.ingredient,
    order: state.checkout.order
  }));

  const dispatch = useDispatch();

  const handleCloseIngredientModal = () => {
    dispatch({type: RESET_INGREDIENT});
  }

  const handleCloseOrderModal = () => {
    dispatch({type: RESET_ORDER});
  }

  return (
    <>
      <AppHeader />
      <main className={ `${styles.main} pt-10` }>
        <section className={ styles.section }>
          <BurgerIngredients />
        </section>
        <section className={ styles.section }>
          <BurgerConstructor />
        </section>
      </main>
      { ingredient && (
        <Modal onClose={ handleCloseIngredientModal }>
          <IngredientDetails />
        </Modal>
      ) }
      { order && (
        <Modal onClose={ handleCloseOrderModal }>
          <OrderDetails />
        </Modal>
      ) }
    </>
  );
}

export default App;
