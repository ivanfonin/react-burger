import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Loader } from '../../components/loader/loader';
import { login } from '../../services/actions/auth';

export const LoginPage = () => {
  const [form, setForm] = useState({});
  const { user, getUserRequest, loginRequest, loginRequestMessage } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (getUserRequest) {
    return <Loader size="large" />;
  }

  if (user) {
    return <Navigate to={'/'} replace />;
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login(form));
  };

  return (
    <section className="section section_form">
      <h1 className="text text_type_main-medium">Вход</h1>
      <form onSubmit={handleSubmit}>
        <EmailInput
          extraClass={'pt-6'}
          name={'email'}
          value={form?.email ?? ''}
          required={true}
          onChange={handleChange}
        />
        <PasswordInput
          extraClass={'pt-6'}
          name={'password'}
          value={form?.password ?? ''}
          required={true}
          onChange={handleChange}
        />
        {loginRequestMessage && (
          <p className="input__error text_type_main-default pt-2">
            {loginRequestMessage}
          </p>
        )}
        {loginRequest ? (
          <Loader size={'large'} />
        ) : (
          <Button
            htmlType="submit"
            extraClass="mt-6"
            type="primary"
            size="large"
          >
            Войти
          </Button>
        )}
        <p className="text text_type_main-default text_color_inactive pt-20">
          Вы новый пользователь?{' '}
          <NavLink className="link" to={'/register'}>
            Зарегистрироваться
          </NavLink>
        </p>
        <p className="text text_type_main-default text_color_inactive pt-4">
          Забыли пароль?{' '}
          <NavLink className="link" to={'/forgot-password'}>
            Восстановить пароль
          </NavLink>
        </p>
      </form>
    </section>
  );
};
