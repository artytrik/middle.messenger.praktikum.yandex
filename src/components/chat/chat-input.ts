import Block from '../../utils/block';
import {compile} from 'pug';
import chatInput from '../../templates/chat/chat-input.tmpl';

export default class InputBlock extends Block {
  constructor(props: Record<string, unknown>) {
    super('div', {
      ...props,
      classNames: ['chat__input-wrapper']
    });
  }

  render() {
    return compile(chatInput, {})(this.props);
  }
}
