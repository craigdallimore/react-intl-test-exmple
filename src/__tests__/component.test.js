'use strict';

const messages  = { example : 'Translated' };
const TestUtils = require('react-addons-test-utils');

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

    expect(findDOMNode(c).textContent).toContain(messages.example);

  });

  it('will call an action when clicked', () => {

    const button = TestUtils.findRenderedDOMComponentWithTag(c, 'button');

    TestUtils.Simulate.click(button);
    expect(action).toBeCalled();

  });

  it('will isolate actions', () => {

    expect(action).not.toBeCalled();

  });

});
