import Block from '../utils/block';
import {compile} from 'pug';
import buttonTmpl from '../templates/button.tmpl';

export default class Submit extends Block {
  constructor(props: Record<string, unknown>) {
    super('button', props);
  }

  render() {
    if (this.props.type) {
      this.element.setAttribute('type', this.props.type);
    }

    return compile(buttonTmpl, {})(this.props);
  }
}
