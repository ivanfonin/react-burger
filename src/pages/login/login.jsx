import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const LoginPage = () => {
  return (
    <section className="section section_form">
      <h1 className="text text_type_main-medium">Вход</h1>
      <form>
        <EmailInput
          extraClass="pt-6"
          value=""
          onChange={(val) => console.log(val)}
        />
        <PasswordInput
          extraClass="pt-6"
          value=""
          onChange={(val) => console.log(val)}
        />
        <Button htmlType="button" extraClass="mt-6" type="primary" size="large">
          Войти
        </Button>
        <p className="text text_type_main-default text_color_inactive pt-20">
          Вы новый пользователь?{" "}
          <a className="link" href="/register">
            Зарегистрироваться
          </a>
        </p>
        <p className="text text_type_main-default text_color_inactive pt-4">
          Забыли пароль?{" "}
          <a className="link" href="/forgot-password">
            Восстановить пароль
          </a>
        </p>
      </form>
    </section>
  );
};
