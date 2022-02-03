import Block from '../../utils/block';
import {compile} from 'pug';
import chatHeaderTmpl from '../../templates/chat/chat-header.tmpl';

export default class ChatHeader extends Block {
  constructor(props: Record<string, unknown>) {
    super('div', {
      ...props,
      classNames: ['chat__header-block']
    });
  }

  render() {
    return compile(chatHeaderTmpl, {})(this.props);
  }
}
