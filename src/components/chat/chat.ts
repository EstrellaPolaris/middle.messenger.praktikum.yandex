import { Block } from '../../utils/block';
import { IChat } from '../../utils/interfaces'
import template from './chat.hbs';
import './chat.less';
import { withStore } from '../../hocs/with-store';

export class ChatBase extends Block<IChat> {
  constructor(props: IChat) {
    super(props);
  }
  
  render() {
    let time = this.props.last_message?.time;
    if (time !== undefined) {
      time = new Date(time).toString().substring(4, 10);
    }

    return this.compile(template, {
      ...this.props,
      isSelected: this.props.id === this.props.selectedChat?.id,
      isMine: true,
      time,
      avatar: `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`,
    });
  }
}

export const withSelectedChat = withStore((state) => ({
  selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
}));

export const Chat = withSelectedChat(ChatBase as any);
