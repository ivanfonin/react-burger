import { RootState } from '../services/types';

export const getOrder = (state: RootState) => ({
  order: state.checkout.order,
});

export const getOrderRequest = (state: RootState) => ({
  orderRequest: state.checkout.orderRequest,
});

export const getUser = (state: RootState) => ({
  user: state.auth.user,
});

export const getUserRequest = (state: RootState) => ({
  getUserRequest: state.auth.user.getUserRequest,
});

export const getLoginRequest = (state: RootState) => ({
  loginRequest: state.auth.user.loginRequest,
});

export const getLoginRequestMessage = (state: RootState) => ({
  loginRequestMessage: state.auth.user.loginRequestMessage,
});

export const getRegisterRequest = (state: RootState) => ({
  registerRequest: state.auth.user.registerRequest,
});

export const getRegisterRequestMessage = (state: RootState) => ({
  registerRequestMessage: state.auth.user.registerRequestMessage,
});

export const getResetPasswordRequest = (state: RootState) => ({
  resetPasswordRequest: state.auth.resetPasswordRequest,
});

export const getResetPasswordRequestMessage = (state: RootState) => ({
  resetPasswordRequestMessage: state.auth.resetPasswordRequestMessage,
});

export const getSetPasswordRequest = (state: RootState) => ({
  setPasswordRequest: state.auth.setPasswordRequest,
});

export const getSetPasswordRequestMessage = (state: RootState) => ({
  setPasswordRequestMessage: state.auth.setPasswordRequestMessage,
});

export const getUpdateProfileRequest = (state: RootState) => ({
  updateProfileRequest: state.auth.updateProfileRequest,
});

export const getUpdateProfileRequestMessage = (state: RootState) => ({
  updateProfileRequestMessage: state.auth.updateProfileRequestMessage,
});

export const getUpdateProfileRequestSuccess = (state: RootState) => ({
  updateProfileRequestSuccess: state.auth.updateProfileRequestSuccess,
});

export const getBurger = (state: RootState) => ({
  burger: state.burger,
});

export const getIngredients = (state: RootState) => ({
  items: state.ingredients.items,
});

export const getIngredientsRequest = (state: RootState) => ({
  ingredientsRequest: state.ingredients.ingredientsRequest,
});

export const getWsRequest = (state: RootState) => ({
  wsRequest: state.ws.wsRequest,
});

export const getOrders = (state: RootState) => ({
  orders: state.ws.orders,
});

export const getUserOrders = (state: RootState) => ({
  userOrders: state.ws.userOrders,
});

export const getTotal = (state: RootState) => ({
  total: state.ws.total,
});

export const getTotalToday = (state: RootState) => ({
  totalToday: state.ws.totalToday,
});

export const getActiveTab = (state: RootState) => ({
  active: state.tab,
});

export const getOrderInfo = (state: RootState) => ({
  order: state.order.order,
});
