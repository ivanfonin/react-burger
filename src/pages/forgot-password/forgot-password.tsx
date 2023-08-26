import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/hooks';
import { resetPassword } from '../../services/actions/auth';
import { useForm } from '../../hooks/useForm';
import { Loader } from '../../components/loader/loader';
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { FormEvent } from 'react';

export const ForgotPasswordPage = () => {
  const { resetPasswordRequest, resetPasswordRequestMessage } = useSelector(
    (state) => state.auth
  );
  const { form, handleChange } = useForm();
  const dispatch = useDispatch();

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(resetPassword(form));
  };

  return (
    <section className="section section_form">
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <form onSubmit={handleSubmit}>
        <EmailInput
          extraClass="pt-6"
          name={'email'}
          placeholder={'Укажите Email'}
          value={form?.email ?? ''}
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
