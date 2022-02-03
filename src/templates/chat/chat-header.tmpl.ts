import image from '../../img/no-avatar.png';

export default `
.chat__picture-block.picture-block
  img(src="${image}", alt="Нет аватара")
h3.chat__header #{name}
`;
