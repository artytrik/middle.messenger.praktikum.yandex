import Block from '../utils/block';
import {Props} from '../types';

export default class ProfileBlock extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      classNames: ['information__wrapper-block']
    });
  }

  render() {
    if (this.props.id) {
      this.element.setAttribute('id', this.props.id);
    }

    return '';
  }
}
