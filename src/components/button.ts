import Block from '../utils/block';
import {compile} from 'pug';
import buttonTmpl from '../templates/button.tmpl';

export default class Button extends Block {
  constructor(props: Record<string, unknown>) {
    super('a', props);
  }

  render() {
    if (this.props.href) {
      this.element.setAttribute('href', this.props.href);
    }

    return compile(buttonTmpl, {})(this.props);
  }
}
