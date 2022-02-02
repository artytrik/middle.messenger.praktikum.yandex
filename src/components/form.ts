import Block from '../utils/block';
import {Props} from '../types';
import {compile} from 'pug';
import formTmpl from '../templates/form.tmpl';

export default class Form extends Block {
  constructor(props: Props) {
    super('form', props);
  }

  render() {
    return compile(formTmpl, {})(this.props);
  }
}
