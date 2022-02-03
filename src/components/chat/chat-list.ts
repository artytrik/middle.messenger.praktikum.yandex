import Block from '../../utils/block';
import {compile} from 'pug';
import chatListTmpl from '../../templates/chat/chat-list.tmpl';

export default class ChatList extends Block {
  constructor(props: Record<string, unknown>) {
    super('div', {
      ...props,
      classNames: ['sidebar__bottom-block']
    });
  }

  render() {
    return compile(chatListTmpl, {})(this.props);
  }
}
