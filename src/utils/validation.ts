const PATTERN = {
  LOGIN_LETTERS: /^[a-zA-Z0-9-_]+$/,
  LOGIN_NUMBERS: /^\d+$/,
  PASSWORD: /^(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]+$/,
  EMAIL: /^[a-zA-Z0-9_'+*/^&=?~{}-](\.?[a-zA-Z0-9_'+*/^&=?~{}-])*@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,3})?)|(((([a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9])|([a-zA-Z0-9]{1,2}))[.]{1})+([a-zA-Z]{2,6})))$/,
  PHONE: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{10,15}$/,
  NAME: /^[А-ЯA-Z][а-яёЁa-z]+$/
};

const Validation = {
  checkLogin(login: string): string {
    if (login.length < 3 || login.length > 20) {
      return 'Длина должна быть от 3 до 20 символов';
    }
    if (!PATTERN.LOGIN_LETTERS.test(login)) {
      return 'Должен состоять из латинских букв или цифр';
    }
    if (PATTERN.LOGIN_NUMBERS.test(login)) {
      return 'Не должен состоять тольцо из цифр';
    }
    return '';
  },
  checkPassword(password: string): string {
    if (password.length < 8 || password.length > 40) {
      return 'Длина должна быть от 8 до 40 символов';
    }
    if (!PATTERN.PASSWORD.test(password)) {
      return 'Должен состоять из латиницы и содержать хотя бы одну цифру и заглавную букву';
    }
    return '';
  },
  checkEmail(email: string): string {
    if (!PATTERN.EMAIL.test(email)) {
      return 'Должен быть в корректном формате';
    }
    return '';
  },
  checkPhone(phone: string): string {
    if (!PATTERN.PHONE.test(phone)) {
      return 'Должен быть в корректном формате';
    }
    return '';
  },
  checkName(name: string): string {
    if (!PATTERN.NAME.test(name)) {
      return 'Должен быть в корректном формате';
    }
    return '';
  },
  checkText(text: string): string {
    if (!text) {
      return 'Не должно быть пустым';
    }
    return '';
  }
};

export default Validation;
