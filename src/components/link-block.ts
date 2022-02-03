import Block from '../utils/block';
import {Props} from '../types';
import linkBlockTmpl from '../templates/link-block.tmpl';
import {compile} from 'pug';

export default class LinkBlock extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      classNames: ['information__wrapper-block']
    });
  }

  render() {
    return compile(linkBlockTmpl, {})(this.props);
  }
}
