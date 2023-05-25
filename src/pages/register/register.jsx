import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../services/actions/auth';
import { Loader } from '../../components/loader/loader';
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, Navigate } from 'react-router-dom';

export const RegisterPage = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { registerRequest, registerRequestMessage, userRequest, user } =
    useSelector((state) => state.auth);

  if (userRequest) {
    return <Loader size={'large'} />;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(register(form));
  };

  return (
    <section className="section section_form">
      <h1 className="text text_type_main-medium">Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <Input
          extraClass={'pt-6'}
          name={'name'}
          value={form?.name ?? ''}
          placeholder={'Имя'}
          required={true}
          onChange={handleChange}
        />
        <EmailInput
          extraClass={'pt-6'}
          name={'email'}
          value={form?.email ?? ''}
          placeholder={'Email'}
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
        {registerRequestMessage && (
          <p className="input__error text_type_main-default pt-2">
            {registerRequestMessage}
          </p>
        )}
        {registerRequest ? (
          <Loader size={'large'} />
        ) : (
          <Button
            htmlType={'submit'}
            extraClass={'mt-6'}
            type={'primary'}
            size={'large'}
          >
            Зарегистрироваться
          </Button>
        )}

        <p className="text text_type_main-default text_color_inactive pt-20">
          Уже зарегистрированы?{' '}
          <NavLink className="link" to={'/login'}>
            Войти
          </NavLink>
        </p>
      </form>
    </section>
  );
};
