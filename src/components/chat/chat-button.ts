import Block from '../../utils/block';
import {compile} from 'pug';
import chatButtonTmpl from '../../templates/chat/chat-button.tmpl';

export default class ChatButton extends Block {
  constructor(props: Record<string, unknown>) {
    super('button', {
      ...props,
      classNames: ['button', 'chat__send-button']
    });
  }

  render() {
    this.element.setAttribute('type', 'submit');

    return compile(chatButtonTmpl, {})(this.props);
  }
}
