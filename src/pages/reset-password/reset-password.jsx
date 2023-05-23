import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ResetPasswordPage = () => {
  return (
    <section className="section section_form">
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <form>
        <PasswordInput
          extraClass="pt-6"
          placeholder="Введите новый пароль"
          value=""
          onChange={(val) => console.log(val)}
        />
        <Input
          extraClass="pt-6"
          placeholder="Введите код из письма"
          value=""
          onChange={(val) => console.log(val)}
        />
        <Button htmlType="button" extraClass="mt-6" type="primary" size="large">
          Сохранить
        </Button>
        <p className="text text_type_main-default text_color_inactive pt-20">
          Вспомнили пароль?{" "}
          <a className="link" href="/login">
            Войти
          </a>
        </p>
      </form>
    </section>
  );
};
