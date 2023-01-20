import proxyquire from 'proxyquire';
import { expect } from 'chai';
import sinon from 'sinon';
import type { Block as BlockType } from './block';

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
};

const { Block } = proxyquire('./block', {
  './event-bus': {
    EventBus: class {
      emit = eventBusMock.emit;
      on = eventBusMock.on;
    },
  },
}) as { Block: typeof BlockType };

describe('block', () => {
  class ComponentMock extends Block {
    constructor(props: any) {
      super(props);
    }
  }

  it('should fire init event on initialization', () => {
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });
});
