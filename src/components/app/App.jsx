import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { checkout, RESET_ORDER } from '../../services/actions/checkout';
import { SET_INGREDIENT, RESET_INGREDIENT } from '../../services/actions/ingredient';

import styles from './App.module.css';

function App() {
  const { ingredient, order, orderRequest } = useSelector(state => ({
    ingredient: state.ingredient,
    order: state.checkout.order,
    orderRequest: state.checkout.orderRequest
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleCloseOrderModal = () => {
    dispatch({type: RESET_ORDER});
  }

  const handleCloseIngredientModal = () => {
    dispatch({type: RESET_INGREDIENT});
  }

  const handleIngredientSelected = (ingredient) => {
    dispatch({type: SET_INGREDIENT, ingredient});
  }

  const handleCheckout = (order) => {
    dispatch(checkout(order));
  }

  return (
    <>
      <AppHeader />
      <main className={ `${styles.main} pt-10` }>
        <section className={ styles.section }>
          <BurgerIngredients showIngredient={ handleIngredientSelected } />
        </section>
        <section className={ styles.section }>
          <BurgerConstructor createOrder={ handleCheckout } />
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
