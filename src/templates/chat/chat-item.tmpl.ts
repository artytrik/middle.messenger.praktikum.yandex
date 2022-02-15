import image from '../../img/no-avatar.png';

export default `
.chat-list__picture-block.picture-block
  img(src="${image}", alt="Нет аватара")
.chat-list__content-block
  h3.chat-list__header #{name}
  p.chat-list__message #{text}
.chat-list__info-block
  span.chat-list__info #{time}
  span.chat-list__info #{day}
`;
