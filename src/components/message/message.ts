import { Block } from '../../utils/Block';
import { IMessageProps } from '../../utils/Interfaces';
import template from './message.hbs';
import './message.less';

export class Message extends Block<IMessageProps> {
  constructor(props: IMessageProps) {
    super({ ...props });
  }

  protected render(): DocumentFragment {
    let time = this.props.time;
    if (time !== undefined) {
      time = new Date(time).toString().substring(16, 21);
    }

    return this.compile(template, { ...this.props, time });
  }
}
