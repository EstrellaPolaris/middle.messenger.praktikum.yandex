import { isEqual } from './is-equal';
import { renderDOM } from './render-dom';
import { Block } from './block';

export interface BlockConstructable<P extends Record<string, any> = any> {
  new(props: P): Block<P>;
}

export class Route {
  private _block: Block | null = null;

  constructor(
    private _pathname: string,
    private readonly blockClass: BlockConstructable,
    private readonly _query: string
  ) {}

  public leave() {
    this._block = null;
  }

  public match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  public render() {
    if (!this._block) {
      this._block = new this.blockClass({});
      renderDOM(this._query, this._block);
    }
  }
}
