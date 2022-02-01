import Block from '../utils/block';
import {Props} from '../types';
import {compile} from 'pug';
import formTmpl from '../templates/form.tmpl';

export default class Form extends Block {
  constructor(props: Props) {
    super('form', {
      ...props,
      classNames: ['authorize__form'],
      events: {
        'submit': (e) => {
          e.preventDefault();
          if (e.currentTarget) {
            const target = e.target as HTMLFormElement;
            const formData = new FormData(target);
            formData.forEach((value, key) => {
              // eslint-disable-next-line no-console
              console.log(`${key}=${value}`);
            });
          }
        }
      }
    });
  }

  render() {
    return compile(formTmpl, {})(this.props);
  }
}
