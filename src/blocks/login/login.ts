import Block from '../../utils/block';
import renderDOM from '../../utils/render-dom';
import {compile} from 'pug';
import authorizeTmpl from '../../templates/authorize.tmpl';
import InputBlock from '../../components/input-block';
import Link from '../../components/link';
import Form from '../../components/form';
import Button from '../../components/button';

export default class Login extends Block {
  constructor(props: Record<string, unknown>) {
    super('section', {
      ...props,
      classNames: ['authorize']
    });
  }

  render() {
    return compile(authorizeTmpl, {})(this.props);
  }
}

const login = new Login({
  header: 'Вход'
});

const loginForm = new Form({
  wrappers: [
    'authorize__input-wrapper',
    'authorize__link-wrapper'
  ]
});

const loginBlock = new InputBlock({
  labelName: 'Логин',
  inputType: 'text',
  name: 'login'
});

const passwordBlock = new InputBlock({
  labelName: 'Пароль',
  inputType: 'password',
  name: 'password'
});

const enterButton = new Button({
  classNames: ['authorize__button', 'button'],
  text: 'Войти',
  type: 'submit'
});

const regButton = new Link({
  classNames: ['authorize__link'],
  text: 'Регистрация',
  href: './registration.html'
});

renderDOM('.app', login);
renderDOM('.authorize-block', loginForm);
renderDOM('.authorize__input-wrapper', loginBlock);
renderDOM('.authorize__input-wrapper', passwordBlock);
renderDOM('.authorize__link-wrapper', enterButton);
renderDOM('.authorize__link-wrapper', regButton);
