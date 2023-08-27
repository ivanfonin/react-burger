import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
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
  OrderPage,
  FeedPage,
} from '../../pages';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderConfirmation from '../order-confirmation/OrderConfirmation';
import { RESET_ORDER } from '../../services/actions/checkout';
import { getIngredients } from '../../services/actions/ingredients';
import { checkAuth } from '../../services/actions/auth';
import { getOrder } from '../../utils/storeHelpers';

import styles from './App.module.css';

function App() {
  const { order } = useSelector(getOrder);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const handleCloseModal = () => {
    navigate(-1);
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
          <Route
            path="/login"
            element={
              <ProtectedRoute children={<LoginPage />} anonymous={true} />
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute children={<RegisterPage />} anonymous={true} />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ProtectedRoute
                children={<ForgotPasswordPage />}
                anonymous={true}
              />
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRoute
                children={<ResetPasswordPage />}
                anonymous={true}
              />
            }
          />
          <Route
            path="/profile"
            element={<ProtectedRoute children={<ProfilePage />} />}
          />
          <Route
            path="/profile/orders"
            element={<ProtectedRoute children={<ProfileOrdersPage />} />}
          />
          <Route
            path="/profile/orders/:id"
            element={<ProtectedRoute children={<OrderPage />} />}
          />
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/feed/:id" element={<OrderPage />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </main>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal onClose={handleCloseModal}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            element={
              <Modal onClose={handleCloseModal}>
                <OrderPage />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <ProtectedRoute>
                <Modal onClose={handleCloseModal}>
                  <OrderPage />
                </Modal>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      )}
      {order && (
        <Modal onClose={handleCloseOrderModal}>
          <OrderConfirmation />
        </Modal>
      )}
    </>
  );
}

export default App;
