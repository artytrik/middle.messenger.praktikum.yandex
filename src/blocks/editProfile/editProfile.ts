import renderDOM from '../../utils/render-dom';
import PictureBlock from '../../components/picture-block';
import Form from '../../components/form';
import ProfileBlock from '../../components/profile-block';
import ProfileItem from '../../components/profile-item';
import Button from '../../components/button';
import Validation from '../../utils/validation';
import Event from '../../utils/event';
import {INPUT_NAME} from '../../const';

const pictureBlock = new PictureBlock({});

const formWrapper = new ProfileBlock({
  id: 'form'
});

const emailItem = new ProfileItem({
  name: 'email',
  type: 'email',
  value: 'pochta@yandex.ru',
  label: 'Почта',
  isInput: true,
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkEmail, emailItem)
  }
});

const loginItem = new ProfileItem({
  name: 'login',
  type: 'text',
  value: 'ivanivanov',
  label: 'Логин',
  isInput: true,
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkLogin, loginItem)
  }
});

const firstNameItem = new ProfileItem({
  name: 'first_name',
  type: 'text',
  value: 'Иван',
  label: 'Имя',
  isInput: true,
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkName, firstNameItem)
  }
});

const lastNameItem = new ProfileItem({
  name: 'last_name',
  type: 'text',
  value: 'Иванов',
  label: 'Фамилия',
  isInput: true,
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkName, lastNameItem)
  }
});

const displayNameItem = new ProfileItem({
  name: 'display_name',
  type: 'text',
  value: 'Иван',
  label: 'Имя в чате',
  isInput: true,
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkName, displayNameItem)
  }
});

const phoneItem = new ProfileItem({
  name: 'phone',
  type: 'tel',
  value: '+7 (909) 967 30 30',
  label: 'Телефон',
  isInput: true,
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkPhone, phoneItem)
  }
});

const saveButton = new Button({
  classNames: ['button', 'additional-information__button'],
  text: 'Сохранить',
  type: 'submit'
});

const profileForm = new Form({
  classNames: ['additional-information__form'],
  wrappers: ['additional-information'],
  isList: true,
  events: {
    'submit': (e) => {
      e.preventDefault();

      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
      const consoleObject: Record<string, string> = {};

      formData.forEach((value, key) => {
        if (typeof value === 'string') {
          switch (key) {
            case INPUT_NAME.LOGIN:
              Event.onFormSubmit(value, key, Validation.checkLogin, loginItem, consoleObject);
              break;
            case INPUT_NAME.EMAIL: {
              Event.onFormSubmit(value, key, Validation.checkEmail, emailItem, consoleObject);
              break;
            }
            case INPUT_NAME.FIRST_NAME: {
              Event.onFormSubmit(value, key, Validation.checkName, firstNameItem, consoleObject);
              break;
            }
            case INPUT_NAME.LAST_NAME: {
              Event.onFormSubmit(value, key, Validation.checkName, lastNameItem, consoleObject);
              break;
            }
            case INPUT_NAME.DISPLAY_NAME: {
              Event.onFormSubmit(value, key, Validation.checkName, displayNameItem, consoleObject);
              break;
            }
            case INPUT_NAME.PHONE: {
              Event.onFormSubmit(value, key, Validation.checkPhone, phoneItem, consoleObject);
              break;
            }
          }
        }
      });

      // eslint-disable-next-line no-console
      console.log(consoleObject);
    }
  }
});

renderDOM('.app', pictureBlock);
renderDOM('.app', formWrapper);
renderDOM('#form', profileForm);
renderDOM('.additional-information', emailItem);
renderDOM('.additional-information', loginItem);
renderDOM('.additional-information', firstNameItem);
renderDOM('.additional-information', lastNameItem);
renderDOM('.additional-information', displayNameItem);
renderDOM('.additional-information', phoneItem);
renderDOM('.additional-information__form', saveButton);
