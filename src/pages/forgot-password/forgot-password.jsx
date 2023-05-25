import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../services/actions/auth';
import { useState } from 'react';
import { Loader } from '../../components/loader/loader';
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const ForgotPasswordPage = () => {
  const { user, resetPasswordRequest, resetPasswordRequestMessage } =
    useSelector((state) => state.auth);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  if (user) {
    return <Navigate to={'/'} replace />;
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(resetPassword(form));
  };

  return (
    <section className="section section_form">
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <form onSubmit={handleSubmit}>
        <EmailInput
          extraClass="pt-6"
          name={'name'}
          placeholder={'Укажите Email'}
          value={form?.name ?? ''}
          required={true}
          onChange={handleChange}
        />
        {resetPasswordRequestMessage && (
          <p className="input__error text_type_main-default pt-2">
            {resetPasswordRequestMessage}
          </p>
        )}
        {resetPasswordRequest ? (
          <Loader size={'large'} />
        ) : (
          <Button
            htmlType="submit"
            extraClass="mt-6"
            type="primary"
            size="large"
          >
            Восстановить
          </Button>
        )}
        <p className="text text_type_main-default text_color_inactive pt-20">
          Вспомнили пароль?{' '}
          <NavLink className="link" to={'/login'}>
            Войти
          </NavLink>
        </p>
      </form>
    </section>
  );
};
