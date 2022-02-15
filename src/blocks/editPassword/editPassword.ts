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

const oldPasswordItem = new ProfileItem({
  name: 'oldPassword',
  type: 'password',
  label: 'Старый пароль',
  isInput: true,
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkPassword, oldPasswordItem)
  }
});

const passwordItem = new ProfileItem({
  name: 'password',
  type: 'password',
  label: 'Новый пароль',
  isInput: true,
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkPassword, passwordItem)
  }
});

const repeatPasswordItem = new ProfileItem({
  name: 'repeatPassword',
  type: 'password',
  label: 'Повторите новый пароль',
  isInput: true,
  events: {
    'focusout': (e: Event) => Event.onInputFocusOut(e, Validation.checkPassword, repeatPasswordItem)
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
            case INPUT_NAME.OLD_PASSWORD:
              Event.onFormSubmit(value, key, Validation.checkPassword, oldPasswordItem, consoleObject);
              break;
            case INPUT_NAME.EMAIL: {
              Event.onFormSubmit(value, key, Validation.checkPassword, passwordItem, consoleObject);
              break;
            }
            case INPUT_NAME.FIRST_NAME: {
              Event.onFormSubmit(value, key, Validation.checkPassword, repeatPasswordItem, consoleObject);
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
renderDOM('.additional-information', oldPasswordItem);
renderDOM('.additional-information', passwordItem);
renderDOM('.additional-information', repeatPasswordItem);
renderDOM('.additional-information__form', saveButton);
