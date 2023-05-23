import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ForgotPasswordPage = () => {
  return (
    <section className="section section_form">
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <form>
        <EmailInput
          extraClass="pt-6"
          placeholder="Укажите Email"
          value=""
          onChange={(val) => console.log(val)}
        />
        <Button htmlType="button" extraClass="mt-6" type="primary" size="large">
          Восстановить
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
