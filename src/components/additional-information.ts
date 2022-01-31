import Block from '../utils/block';
import {Props} from '../types';
import additionalInformationTmpl from '../templates/additional-information.tmpl';
import {compile} from 'pug';

export default class AdditionalInformation extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      classNames: ['information__wrapper-block']
    });
  }

  render() {
    return compile(additionalInformationTmpl, {})(this.props);
  }
}
