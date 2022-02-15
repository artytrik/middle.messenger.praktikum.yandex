import Block from '../../utils/block';
import renderDOM from '../../utils/render-dom';
import {compile} from 'pug';
import serverErrorTmpl from '../../templates/error.tmpl';

export default class ClientError extends Block {
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

const clientError = new ClientError({
  errorNumber: 404,
  errorDescription: 'Страница не существует'
});

renderDOM('.app', clientError);
