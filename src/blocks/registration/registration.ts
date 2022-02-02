import Block from '../../utils/block';
import renderDOM from '../../utils/render-dom';
import {compile} from 'pug';
import authorizeTmpl from '../../templates/authorize.tmpl';
import InputBlock from '../../components/input-block';
import Link from '../../components/link';
import Form from '../../components/form';
import {INPUT_NAME} from '../../const';
import Event from '../../utils/event';
import Validation from '../../utils/validation';
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
  name: 'email',
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkEmail, mailBlock)
  }
});

const loginBlock = new InputBlock({
  labelName: 'Логин',
  inputType: 'text',
  name: 'login',
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkLogin, loginBlock)
  }
});

const firstNameBlock = new InputBlock({
  labelName: 'Имя',
  inputType: 'text',
  name: 'first_name',
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkName, firstNameBlock)
  }
});

const lastNameBlock = new InputBlock({
  labelName: 'Фамилия',
  inputType: 'text',
  name: 'last_name',
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkName, lastNameBlock)
  }
});

const telephoneBlock = new InputBlock({
  labelName: 'Телефон',
  inputType: 'tel',
  name: 'phone',
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkPhone, telephoneBlock)
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

const regButton = new Button({
  classNames: ['authorize__button', 'button'],
  text: 'Регистрация',
  type: 'submit'
});

const enterButton = new Link({
  classNames: ['authorize__link'],
  text: 'Войти',
  href: './login.html'
});

const regForm = new Form({
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
          case INPUT_NAME.EMAIL: {
            Event.onFormSubmit(value, key, Validation.checkEmail, mailBlock, consoleObject);
            break;
          }
          case INPUT_NAME.FIRST_NAME: {
            Event.onFormSubmit(value, key, Validation.checkName, firstNameBlock, consoleObject);
            break;
          }
          case INPUT_NAME.LAST_NAME: {
            Event.onFormSubmit(value, key, Validation.checkName, lastNameBlock, consoleObject);
            break;
          }
          case INPUT_NAME.PHONE: {
            Event.onFormSubmit(value, key, Validation.checkPhone, telephoneBlock, consoleObject);
            break;
          }
        }
      });

      // eslint-disable-next-line no-console
      console.log(consoleObject);
    }
  }
});

renderDOM('.app', registration);
renderDOM('.authorize-block', regForm);
renderDOM('.authorize__input-wrapper', mailBlock);
renderDOM('.authorize__input-wrapper', loginBlock);
renderDOM('.authorize__input-wrapper', firstNameBlock);
renderDOM('.authorize__input-wrapper', lastNameBlock);
renderDOM('.authorize__input-wrapper', telephoneBlock);
renderDOM('.authorize__input-wrapper', passwordBlock);
renderDOM('.authorize__link-wrapper', regButton);
renderDOM('.authorize__link-wrapper', enterButton);

