import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../../utils/helpers';
import { setPassword } from '../../services/actions/auth';
import { Loader } from '../../components/loader/loader';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const ResetPasswordPage = () => {
  const { setPasswordRequest, setPasswordRequestMessage } = useSelector(
    (state) => state.auth
  );
  const { form, handleChange } = useForm();
  const dispatch = useDispatch();

  if (getCookie('password-reset-code') !== 'sent') {
    return <Navigate to={'/forgot-password'} replace />;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setPassword(form));
  };

  return (
    <section className="section section_form">
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <form onSubmit={handleSubmit}>
        <PasswordInput
          name={'password'}
          extraClass={'pt-6'}
          placeholder={'Введите новый пароль'}
          value={form?.password || ''}
          onChange={handleChange}
        />
        <Input
          name={'token'}
          extraClass={'pt-6'}
          placeholder={'Введите код из письма'}
          value={form?.token || ''}
          onChange={handleChange}
        />
        {setPasswordRequestMessage && (
          <p className="input__error text_type_main-default pt-2">
            {setPasswordRequestMessage}
          </p>
        )}
        {setPasswordRequest ? (
          <Loader size={'large'} />
        ) : (
          <Button
            htmlType="submit"
            extraClass="mt-6"
            type="primary"
            size="large"
          >
            Сохранить
          </Button>
        )}
        <p className="text text_type_main-default text_color_inactive pt-20">
          Вспомнили пароль?{' '}
          <a className="link" href="/login">
            Войти
          </a>
        </p>
      </form>
    </section>
  );
};
