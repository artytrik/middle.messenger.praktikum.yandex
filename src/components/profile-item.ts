import Block from '../utils/block';
import profileItemTmpl from '../templates/profile-item.tmpl';
import {compile} from 'pug';

export default class ProfileItem extends Block {
  constructor(props: Record<string, unknown>) {
    super('li', {
      ...props,
      classNames: ['additional-information__item']
    });
  }

  render() {
    return compile(profileItemTmpl, {})(this.props);
  }
}
