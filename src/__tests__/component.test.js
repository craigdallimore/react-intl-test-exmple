'use strict';

const messages = { example : 'Translated' };
const TestUtils = require('react-addons-test-utils');

describe('component', () => {

  let Component;
  let action;

  beforeEach(() => {

    Component = require.requireActual('../component.jsx');
    action    = require('../action');

  });

  it('can be tested', () => {

    const WrappedComponent = wrap(Component);
    const c = renderIntoDocument(<WrappedComponent/>);

    expect(findDOMNode(c).textContent).toContain(messages.example);

  });

  it('will call an action when clicked', () => {

    const WrappedComponent = wrap(Component);
    const c = renderIntoDocument(<WrappedComponent/>);
    const button = TestUtils.findRenderedDOMComponentWithTag(c, 'button');

    TestUtils.Simulate.click(button);

    expect(action).toBeCalled();

  });

  it('will still be called?', () => {

    expect(action).not.toBeCalled();

  });

});
