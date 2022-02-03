import Block from '../../utils/block';
import {compile} from 'pug';
import sidebarTopTmpl from '../../templates/chat/sidebar-top.tmpl';

export default class SidebarTop extends Block {
  constructor(props: Record<string, unknown>) {
    super('div', {
      ...props,
      classNames: ['sidebar__top-block']
    });
  }

  render() {
    return compile(sidebarTopTmpl, {})(this.props);
  }
}
