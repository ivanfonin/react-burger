import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../services/actions/auth';
import { UPDATE_PROFILE_MESSAGE_HIDE } from '../../services/actions/auth';
import { ProfileNav } from '../../components/profile-nav/ProfileNav';
import {
  Button,
  EmailInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Loader } from '../../components/loader/loader';
import styles from './Profile.module.css';
import { useForm } from '../../hooks/useForm';

export const ProfilePage = () => {
  const {
    user,
    updateProfileRequest,
    updateProfileRequestMessage,
    updateProfileRequestSuccess,
  } = useSelector((state) => state.auth);
  const { form, setForm, handleChange } = useForm();
  const [inputIcons, setInputIcons] = useState({
    name: 'EditIcon',
    email: 'EditIcon',
    password: 'EditIcon',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setForm({ ...user });
  }, [user, setForm]);

  const handleFocus = (evt) => {
    setInputIcons({
      ...inputIcons,
      [evt.target.name]: evt.type === 'focus' ? 'CloseIcon' : 'EditIcon',
    });
  };

  const handleFormReset = () => {
    setForm({ ...user });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updateProfile(form));
    setTimeout(() => {
      dispatch({ type: UPDATE_PROFILE_MESSAGE_HIDE });
    }, 2500);
  };

  return (
    <>
      <section className="section section_size_small pt-30">
        <ProfileNav />

        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </section>
      <section className="section pt-30">
        <form onSubmit={handleSubmit}>
          <Input
            name={'name'}
            placeholder={'Имя'}
            value={form?.name ?? ''}
            required={true}
            icon={inputIcons.name}
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={handleChange}
          />
          <EmailInput
            extraClass={'pt-6'}
            name={'email'}
            placeholder={'Email'}
            value={form?.email ?? ''}
            required={true}
            icon={inputIcons.email}
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={handleChange}
          />
          <Input
            type={'password'}
            name={'password'}
            placeholder={'Пароль'}
            value={form?.password ?? ''}
            extraClass={'pt-6'}
            icon={inputIcons.password}
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={handleChange}
          />
          {updateProfileRequestSuccess && (
            <p className="text_type_main-default pt-2 pl-6">
              Профиль успешно обновлен
            </p>
          )}
          {updateProfileRequestMessage && (
            <p className="input__error text_type_main-default pt-2">
              {updateProfileRequestMessage}
            </p>
          )}
          {updateProfileRequest ? (
            <Loader size={'large'} />
          ) : (
            <div className={styles.buttons}>
              {(form?.name !== user.name ||
                form?.email !== user.email ||
                form?.password) && (
                <Button
                  htmlType={'button'}
                  extraClass="mt-6"
                  type={'secondary'}
                  size="large"
                  onClick={handleFormReset}
                >
                  Отмена
                </Button>
              )}
              <Button
                disabled={
                  form?.name === user.name &&
                  form?.email === user.email &&
                  !form?.password
                }
                htmlType={'submit'}
                extraClass={'mt-6'}
                type={'primary'}
                size={'large'}
              >
                Сохранить
              </Button>
            </div>
          )}
        </form>
      </section>
    </>
  );
};
