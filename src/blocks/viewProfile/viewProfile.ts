import renderDOM from '../../utils/render-dom';
import PictureBlock from '../../components/picture-block';
import AdditionalInformation from '../../components/additional-information';
import LinkBlock from '../../components/link-block';

const pictureBlock = new PictureBlock({
  header: 'Иван'
});

const additionalInformation = new AdditionalInformation({});

const linkBlock = new LinkBlock({});

renderDOM('.app', pictureBlock);
renderDOM('.app', additionalInformation);
renderDOM('.app', linkBlock);
