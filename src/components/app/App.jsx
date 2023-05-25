import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
  ProfileOrdersPage,
} from '../../pages';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import { RESET_ORDER } from '../../services/actions/checkout';
import { RESET_INGREDIENT } from '../../services/actions/ingredient';
import { getIngredients } from '../../services/actions/ingredients';
import { checkAuth } from '../../services/actions/auth';

import styles from './App.module.css';

function App() {
  const { order } = useSelector((state) => ({
    ingredient: state.ingredient,
    order: state.checkout.order,
  }));
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const handleCloseIngredientModal = () => {
    navigate(-1);
    dispatch({ type: RESET_INGREDIENT });
  };

  const handleCloseOrderModal = () => {
    dispatch({ type: RESET_ORDER });
  };

  return (
    <>
      <AppHeader />
      <main className={`${styles.main}`}>
        <Routes location={background || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<ProfilePage />} />}
          />
          <Route
            path="/profile/orders"
            element={<ProtectedRoute element={<ProfileOrdersPage />} />}
          />
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </main>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal onClose={handleCloseIngredientModal}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
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
