'use strict';

const messages  = { example : 'Translated' };
const wrap      = require.requireActual('../../wrapIntlProvider');

describe('component', () => {

  let action;
  let c;

  beforeEach(() => {

    const Component = require.requireActual('../component.jsx');
    const WrappedComponent = wrap(Component);

    c = renderIntoDocument(<WrappedComponent/>);

    action = require('../action');

  });

  it('will display translations', () => {

    // contrived, see wrapIntlProvider for identical `messages` declaration
    expect(findDOMNode(c).textContent).toContain(messages.example);

  });

  it('will call an action when clicked', () => {

    const button = findWithTag(c, 'button');

    Simulate.click(button);
    expect(action).toBeCalled();

  });

  it('will isolate actions', () => {

    expect(action).not.toBeCalled();

  });

});
