import Block from '../utils/block';
import {compile} from 'pug';
import linkTmpl from '../templates/button.tmpl';

export default class Link extends Block {
  constructor(props: Record<string, unknown>) {
    super('a', props);
  }

  render() {
    if (this.props.href) {
      this.element.setAttribute('href', this.props.href);
    }

    return compile(linkTmpl, {})(this.props);
  }
}
