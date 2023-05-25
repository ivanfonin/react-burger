import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route/ProtectedRoute';
import AppHeader from '../app-header/AppHeader';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  NotFound404,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
} from '../../pages';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import { useSelector, useDispatch } from 'react-redux';
import { RESET_ORDER } from '../../services/actions/checkout';
import { RESET_INGREDIENT } from '../../services/actions/ingredient';
import { checkAuth } from '../../services/actions/auth';
import { useEffect } from 'react';

import styles from './App.module.css';

function App() {
  const { ingredient, order } = useSelector((state) => ({
    ingredient: state.ingredient,
    order: state.checkout.order,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const handleCloseIngredientModal = () => {
    dispatch({ type: RESET_INGREDIENT });
  };

  const handleCloseOrderModal = () => {
    dispatch({ type: RESET_ORDER });
  };

  return (
    <>
      <AppHeader />
      <main className={`${styles.main}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<ProfilePage />} />}
          />
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
