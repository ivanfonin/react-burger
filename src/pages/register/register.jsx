import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../../services/actions/auth';
import { Loader } from '../../components/loader/loader';
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const RegisterPage = () => {
  const { form, handleChange } = useForm();
  const dispatch = useDispatch();
  const { registerRequest, registerRequestMessage, userRequest } = useSelector(
    (state) => state.auth
  );

  if (userRequest) {
    return <Loader size={'large'} />;
  }

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
