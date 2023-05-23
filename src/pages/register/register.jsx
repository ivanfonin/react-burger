import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const RegisterPage = () => {
  return (
    <section className="section section_form">
      <h1 className="text text_type_main-medium">Регистрация</h1>
      <form>
        <Input
          extraClass="pt-6"
          placeholder="Имя"
          value=""
          onChange={(val) => console.log(val)}
        />
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
          Зарегистрироваться
        </Button>
        <p className="text text_type_main-default text_color_inactive pt-20">
          Уже зарегистрированы?{" "}
          <a className="link" href="/login">
            Войти
          </a>
        </p>
      </form>
    </section>
  );
};
