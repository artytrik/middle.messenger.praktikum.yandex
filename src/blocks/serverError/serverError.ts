import Block from '../../utils/block';
import renderDOM from '../../utils/render-dom';
import {compile} from 'pug';
import serverErrorTmpl from '../../templates/error.tmpl';

export default class ServerError extends Block {
  constructor(props: Record<string, unknown>) {
    super('section', {
      ...props,
      classNames: ['error']
    });
  }

  render() {
    return compile(serverErrorTmpl, {})(this.props);
  }
}

const serverError = new ServerError({
  errorNumber: 500,
  errorDescription: 'Ошибка сервера'
});

renderDOM('.app', serverError);
