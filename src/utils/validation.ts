const Validation = {
  checkLogin(login: string): string {
    if (login.length < 3 || login.length > 20) {
      return 'Длина должна быть от 3 до 20 символов';
    }
    if (!/^[a-zA-Z0-9-_]+$/.test(login)) {
      return 'Должен состоять из латинских букв или цифр';
    }
    if (/^\d+$/.test(login)) {
      return 'Не должен состоять тольцо из цифр';
    }
    return '';
  },
  checkPassword(password: string): string {
    if (password.length < 8 || password.length > 40) {
      return 'Длина должна быть от 8 до 40 символов';
    }
    if (!/^(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]+$/.test(password)) {
      return 'Должен состоять из латиницы и содержать хотя бы одну цифру и заглавную букву';
    }
    return '';
  }
};

export default Validation;
