import Block from '../../utils/block';
import {compile} from 'pug';
import wrapperTmpl from '../../templates/wrapper.tmpl';

export default class ChatBlock extends Block {
  constructor(props: Record<string, unknown>) {
    super('div', props);
  }

  render() {
    return compile(wrapperTmpl, {})(this.props);
  }
}
