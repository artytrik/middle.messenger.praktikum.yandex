import Block from '../../utils/block';
import {compile} from 'pug';
import chatItemTmpl from '../../templates/chat/chat-item.tmpl';

export default class ChatItem extends Block {
  constructor(props: Record<string, unknown>) {
    super('li', {
      ...props,
      classNames: ['chat-list__item']
    });
  }

  render() {
    return compile(chatItemTmpl, {})(this.props);
  }
}
