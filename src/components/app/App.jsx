import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import config from '../../utils/config';
import { Api } from '../api/Api';
import { useState, useEffect, useReducer, useMemo } from 'react';
import { ConstructorContext } from '../../store/constructorContext';

import styles from './App.module.css';

function App() {
  const server = useMemo(() => {
    return new Api(config.api);
  }, []);
  const [ingredients, setIngredients] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [showOrder, setShowOrder] = useState(null);

  function reducer(state, action) {
    if ('set-ingredients' === action.type ) {
      state.ingredients = action.payload.filter(ingredient => ingredient.type !== 'bun');
      state.bun = action.payload.find(ingredient => ingredient.type === 'bun');
      return state;
    }

    if ('set-order' === action.type) {
      state.order = action.payload;
      return state;
    }

    throw new Error(`Wrong type of action: ${action.type}`);
  }

  const constructorInitialState = {
    bun: null,
    ingredients: [],
    order: null
  }

  const [constructorState, constructorDispatcher] = useReducer(reducer, constructorInitialState);

  useEffect(() => {
    server.get('/ingredients')
      .then((res) => {
        setIngredients(res.data);
        constructorDispatcher({type: 'set-ingredients', payload: res.data});
      });
  }, [server]);

  const handleCloseModal = () => {
    setIngredient(null);
    setShowOrder(null);
  }

  const handleIngredientSelected = (ingredient) => {
    setIngredient(ingredient);
  }

  const handleOrderCreated = (data) => {
    server.post('/orders', data)
      .then((res) => {
        constructorDispatcher({ 'type': 'set-order', 'payload': res.order });
      })
      .then(setShowOrder(true));
  }

  return (
    <>
      <AppHeader />
      <main className={ `${styles.main} pt-10` }>
        <ConstructorContext.Provider value={{ constructorState, constructorDispatcher }}>
          <section className={ styles.section }>
            { ingredients && (
              <BurgerIngredients ingredients={ ingredients } showIngredient={ handleIngredientSelected } />
            ) }
          </section>
          <section className={ styles.section }>
            { constructorState.ingredients && (
              <BurgerConstructor createOrder={ handleOrderCreated } />
            ) }
          </section>
        </ConstructorContext.Provider>
      </main>
      { ingredient && (
        <Modal onClose={ handleCloseModal }>
          <IngredientDetails { ...ingredient } />
        </Modal>
      ) }
      { showOrder && (
        <Modal onClose={ handleCloseModal }>
          <OrderDetails { ...constructorState.order } />
        </Modal>
      ) }
    </>
  );
}

export default App;
