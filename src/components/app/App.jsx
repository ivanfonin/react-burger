import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import config from '../../utils/config';
import { Api } from '../api/Api';
import { useEffect, useReducer, useMemo } from 'react';
import { ConstructorContext, reducer as constructorReducer } from '../../context/constructor-context/constructorContext';
import { IngredientsContext, reducer as ingredientsReducer } from '../../context/ingredients-context/ingredientsContext';
import { ModalContext, reducer as modalReducer } from '../../context/modal-context/modalContext';

import styles from './App.module.css';

function App() {
  const server = useMemo(() => new Api(config.api), []);
  const [ingredientsState, ingredientsDispatcher] = useReducer(ingredientsReducer, {ingredients: []});
  const [constructorState, constructorDispatcher] = useReducer(constructorReducer, {bun: null, ingredients: [], total: 0});
  const [modalState, modalDispatcher] = useReducer(modalReducer, {order: null, ingredient: null});

  useEffect(() => {
    server.get('/ingredients')
      .then((res) => {
        ingredientsDispatcher({type: 'set', payload: res.data});
        constructorDispatcher({type: 'set', payload: res.data});
      });
  }, [server]);

  const handleCloseModal = () => {
    modalDispatcher({type: 'reset'});
  }

  const handleIngredientSelected = (ingredient) => {
    modalDispatcher({type: 'ingredient', payload: ingredient});
  }

  const handleOrderCreated = (order) => {
    server.post('/orders', order)
      .then((res) => modalDispatcher({type: 'order', payload: res.order}));
  }

  return (
    <>
      <AppHeader />
      <main className={ `${styles.main} pt-10` }>
        <section className={ styles.section }>
          { ingredientsState.ingredients && (
            <IngredientsContext.Provider value={{ ingredientsState }}>
              <BurgerIngredients showIngredient={ handleIngredientSelected } />
            </IngredientsContext.Provider>
          ) }
        </section>
        <section className={ styles.section }>
          { constructorState.ingredients && (
            <ConstructorContext.Provider value={{ constructorState }}>
              <BurgerConstructor createOrder={ handleOrderCreated } />
            </ConstructorContext.Provider>
          ) }
        </section>
      </main>
      <ModalContext.Provider value={{ modalState }}>
        { modalState.ingredient && (
          <Modal onClose={ handleCloseModal }>
            <IngredientDetails />
          </Modal>
        ) }
        { modalState.order && (
          <Modal onClose={ handleCloseModal }>
            <OrderDetails />
          </Modal>
        ) }
      </ModalContext.Provider>
    </>
  );
}

export default App;
