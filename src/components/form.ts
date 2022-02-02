import Block from '../utils/block';
import {Props} from '../types';
import {compile} from 'pug';
import wrapperTmpl from '../templates/wrapper.tmpl';

export default class Form extends Block {
  constructor(props: Props) {
    super('form', props);
  }

  render() {
    return compile(wrapperTmpl, {})(this.props);
  }
}
