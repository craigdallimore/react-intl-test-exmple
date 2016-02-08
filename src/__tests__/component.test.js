'use strict';

const messages = { example : 'Translated' };

/*
describe('component without i18n', () => {

  it('can be tested', () => {

    const Component = require.requireActual('../componentNoI18n.jsx');
    const c = renderIntoDocument(<Component/>);

    expect(findDOMNode(c).textContent).toContain('No translation');

  });

});
*/

describe('component with i18n', () => {

  it('can be tested', () => {

    const Component = require.requireActual('../component.jsx');
    const WrappedComponent = wrap(Component, {});
    const c = renderIntoDocument(<WrappedComponent/>);

    expect(findDOMNode(c).textContent).toContain(messages.example);

  });

});
