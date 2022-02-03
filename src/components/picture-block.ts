import Block from '../utils/block';
import {Props} from '../types';
import pictureBlockTmpl from '../templates/picture-block.tmpl';
import {compile} from 'pug';

export default class PictureBlock extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      classNames: ['information__wrapper-block']
    });
  }

  render() {
    return compile(pictureBlockTmpl, {})(this.props);
  }
}
