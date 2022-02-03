import Block from '../../utils/block';
import {Props} from '../../types';
import chatMessageTmpl from '../../templates/button.tmpl';
import {compile} from 'pug';

export default class ChatMessage extends Block {
  constructor(props: Props) {
    super('p', {
      ...props,
      classNames: props.modificator ? ['chat__text-message', 'chat__message', props.modificator] : ['chat__text-message', 'chat__message']
    });
  }

  render() {
    return compile(chatMessageTmpl, {})(this.props);
  }
}
