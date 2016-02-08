'use strict';

const messages = { example : 'Translated' };

describe('component', () => {

  it('can be tested', () => {

    const Component = require.requireActual('../component.jsx');
    const WrappedComponent = wrap(Component);
    const c = renderIntoDocument(<WrappedComponent/>);

    expect(findDOMNode(c).textContent).toContain(messages.example);

  });

});
