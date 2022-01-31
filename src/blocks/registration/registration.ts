import Block from '../../utils/block';
import renderDOM from '../../utils/render-dom';
import {compile} from 'pug';
import authorizeTmpl from '../../templates/authorize.tmpl';
import InputBlock from '../../components/input-block';
import Button from '../../components/button';

export default class Registration extends Block {
  constructor(props: Record<string, unknown>) {
    super('section', {
      ...props,
      classNames: ['authorize'],
      modificator: 'authorize-block--registration'
    });
  }

  render() {
    return compile(authorizeTmpl, {})(this.props);
  }
}

const registration = new Registration({
  header: 'Регистрация'
});

const mailBlock = new InputBlock({
  labelName: 'Почта',
  inputType: 'email',
  name: 'email'
});

const loginBlock = new InputBlock({
  labelName: 'Логин',
  inputType: 'text',
  name: 'login'
});

const firstNameBlock = new InputBlock({
  labelName: 'Имя',
  inputType: 'text',
  name: 'first_name'
});

const lastNameBlock = new InputBlock({
  labelName: 'Фамилия',
  inputType: 'text',
  name: 'last_name'
});

const telephoneBlock = new InputBlock({
  labelName: 'Телефон',
  inputType: 'tel',
  name: 'phone'
});

const passwordBlock = new InputBlock({
  labelName: 'Пароль',
  inputType: 'password',
  name: 'password'
});

const repeatPasswordBlock = new InputBlock({
  labelName: 'Пароль (ещё раз)',
  inputType: 'password',
  name: 'repeatPassword'
});

const regButton = new Button({
  classNames: ['authorize__button', 'button'],
  text: 'Регистрация',
  href: './index.html'
});

const enterButton = new Button({
  classNames: ['authorize__link'],
  text: 'Войти',
  href: './login.html'
});

renderDOM('.app', registration);
renderDOM('.authorize__input-wrapper', mailBlock);
renderDOM('.authorize__input-wrapper', loginBlock);
renderDOM('.authorize__input-wrapper', firstNameBlock);
renderDOM('.authorize__input-wrapper', lastNameBlock);
renderDOM('.authorize__input-wrapper', telephoneBlock);
renderDOM('.authorize__input-wrapper', passwordBlock);
renderDOM('.authorize__input-wrapper', repeatPasswordBlock);
renderDOM('.authorize__link-wrapper', regButton);
renderDOM('.authorize__link-wrapper', enterButton);

