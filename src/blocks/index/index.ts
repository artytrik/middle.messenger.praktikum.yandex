import renderDOM from '../../utils/render-dom';
import ChatBlock from '../../components/chat/chat-block';
import Block from '../../utils/block';
import SidebarTop from '../../components/chat/sidebar-top';
import ChatList from '../../components/chat/chat-list';
import ChatItem from '../../components/chat/chat-item';
import ChatHeader from '../../components/chat/chat-header';
import ChatMessage from '../../components/chat/chat-message';
import ChatForm from '../../components/form';
import ChatInput from '../../components/chat/chat-input';
import ChatButton from '../../components/chat/chat-button';

export default class ChatWindow extends Block {
  constructor(props: Record<string, unknown>) {
    super('section', {
      ...props,
      classNames: ['chat-window']
    });
  }
}

const chatWindow = new ChatWindow ({});

const sidebar = new ChatBlock ({
  classNames: ['chat-window__sidebar', 'sidebar']
});

const chat = new ChatBlock ({
  classNames: ['chat-window__chat', 'chat'],
});

const sidebarTop = new SidebarTop ({});
const chatList = new ChatList ({});

const chatItem = new ChatItem({
  name: 'Вадим',
  text: 'Круто!',
  time: '11:29',
  day: 'Пт'
});

const chatHeader = new ChatHeader({
  name: 'Вадим'
});

const chatContent = new ChatBlock ({
  classNames: ['chat__content-block'],
});

const leftMessage = new ChatMessage({
  modificator: 'chat__message--left',
  text: 'Привет! Смотри'
});

const rightMessage = new ChatMessage({
  modificator: 'chat__message--right',
  text: 'Круто!'
});

const chatInput = new ChatInput({});

const chatButton = new ChatButton({});

const chatForm = new ChatForm({
  classNames: ['chat__input-block'],
  events: {
    'submit': (e: Event) => {
      e.preventDefault();

      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
      const consoleObject: Record<string, string> = {};

      formData.forEach((value: string, key) => {
        const error = !value;

        chatInput.setProps({
          error,
          value
        });

        if (!error) {
          consoleObject[key] = value;
        }
      });

      // eslint-disable-next-line no-console
      console.log(consoleObject);
    }
  }
});

renderDOM('.app', chatWindow);
renderDOM('.chat-window', sidebar);
renderDOM('.chat-window', chat);
renderDOM('.chat-window__sidebar', sidebarTop);
renderDOM('.chat-window__sidebar', chatList);
renderDOM('.chat-list', chatItem);
renderDOM('.chat-window__chat', chatHeader);
renderDOM('.chat-window__chat', chatContent);
renderDOM('.chat-window__chat', chatForm);
renderDOM('.chat__content-block', leftMessage);
renderDOM('.chat__content-block', rightMessage);
renderDOM('.chat__input-block', chatInput);
renderDOM('.chat__input-block', chatButton);
