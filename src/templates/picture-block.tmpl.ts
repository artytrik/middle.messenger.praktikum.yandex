import image from '../img/no-avatar.png';

export default `
.information__picture-block.picture-block
  img(src="${image}", alt="Нет аватара")
if header
  h3 #{header}
`;
