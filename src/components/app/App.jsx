import { Routes, Route } from "react-router-dom";
import AppHeader from "../app-header/AppHeader";
import { HomePage, NotFound404 } from "../../pages";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import OrderDetails from "../order-details/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import { RESET_ORDER } from "../../services/actions/checkout";
import { RESET_INGREDIENT } from "../../services/actions/ingredient";

import styles from "./App.module.css";

function App() {
  const { ingredient, order } = useSelector((state) => ({
    ingredient: state.ingredient,
    order: state.checkout.order,
  }));

  const dispatch = useDispatch();

  const handleCloseIngredientModal = () => {
    dispatch({ type: RESET_INGREDIENT });
  };

  const handleCloseOrderModal = () => {
    dispatch({ type: RESET_ORDER });
  };

  return (
    <>
      <AppHeader />
      <main className={`${styles.main} pt-10`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </main>
      {ingredient && (
        <Modal onClose={handleCloseIngredientModal}>
          <IngredientDetails />
        </Modal>
      )}
      {order && (
        <Modal onClose={handleCloseOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

export default App;
