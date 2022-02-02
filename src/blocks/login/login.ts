import Block from '../../utils/block';
import renderDOM from '../../utils/render-dom';
import {compile} from 'pug';
import authorizeTmpl from '../../templates/authorize.tmpl';
import InputBlock from '../../components/input-block';
import Link from '../../components/link';
import Form from '../../components/form';
import Button from '../../components/button';
import Validation from '../../utils/validation';
import {INPUT_NAME} from '../../const';
import Event from '../../utils/event';

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

const loginBlock = new InputBlock({
  labelName: 'Логин',
  inputType: 'text',
  name: 'login',
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkLogin, loginBlock)
  }
});

const passwordBlock = new InputBlock({
  labelName: 'Пароль',
  inputType: 'password',
  name: 'password',
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkPassword, passwordBlock)
  }
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

const loginForm = new Form({
  classNames: ['authorize__form'],
  wrappers: [
    'authorize__input-wrapper',
    'authorize__link-wrapper'
  ],
  events: {
    'submit': (e) => {
      e.preventDefault();

      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
      const consoleObject: Record<string, string> = {};

      formData.forEach((value: string, key) => {
        switch (key) {
          case INPUT_NAME.LOGIN:
            Event.onFormSubmit(value, key, Validation.checkLogin, loginBlock, consoleObject);
            break;
          case INPUT_NAME.PASSWORD: {
            Event.onFormSubmit(value, key, Validation.checkPassword, passwordBlock, consoleObject);
            break;
          }
        }
      });

      // eslint-disable-next-line no-console
      console.log(consoleObject);
    }
  }
});

renderDOM('.app', login);
renderDOM('.authorize-block', loginForm);
renderDOM('.authorize__input-wrapper', loginBlock);
renderDOM('.authorize__input-wrapper', passwordBlock);
renderDOM('.authorize__link-wrapper', enterButton);
renderDOM('.authorize__link-wrapper', regButton);
