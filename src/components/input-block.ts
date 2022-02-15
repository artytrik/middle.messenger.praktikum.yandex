import Block from '../utils/block';
import {compile} from 'pug';
import inputBlockTmpl from '../templates/input-block.tmpl';

export default class InputBlock extends Block {
  constructor(props: Record<string, unknown>) {
    super('label', {
      ...props,
      classNames: ['input-block']
    });
  }

  render() {
    return compile(inputBlockTmpl, {})(this.props);
  }
}
