import renderDOM from '../../utils/render-dom';
import PictureBlock from '../../components/picture-block';
import ProfileBlock from '../../components/profile-block';
import ProfileItem from '../../components/profile-item';
import LinkBlock from '../../components/link-block';

const pictureBlock = new PictureBlock({
  header: 'Иван'
});

const profileListWrapper = new ProfileBlock({
  id: 'profileList',
  wrappers: ['additional-information'],
  isList: true
});

const linkBlock = new LinkBlock({});

const emailItem = new ProfileItem({
  name: 'email',
  type: 'email',
  value: 'pochta@yandex.ru',
  label: 'Почта',
});

const loginItem = new ProfileItem({
  name: 'login',
  type: 'text',
  value: 'ivanivanov',
  label: 'Логин',
  isInput: true,
});

const firstNameItem = new ProfileItem({
  name: 'first_name',
  type: 'text',
  value: 'Иван',
  label: 'Имя',
});

const lastNameItem = new ProfileItem({
  name: 'last_name',
  type: 'text',
  value: 'Иванов',
  label: 'Фамилия',
});

const displayNameItem = new ProfileItem({
  name: 'display_name',
  type: 'text',
  value: 'Иван',
  label: 'Имя в чате',
});

const phoneItem = new ProfileItem({
  name: 'phone',
  type: 'tel',
  value: '+7 (909) 967 30 30',
  label: 'Телефон',
});

renderDOM('.app', pictureBlock);
renderDOM('.app', profileListWrapper);
renderDOM('.app', linkBlock);
renderDOM('#profileList .additional-information', emailItem);
renderDOM('#profileList .additional-information', loginItem);
renderDOM('#profileList .additional-information', firstNameItem);
renderDOM('#profileList .additional-information', lastNameItem);
renderDOM('#profileList .additional-information', displayNameItem);
renderDOM('#profileList .additional-information', phoneItem);
