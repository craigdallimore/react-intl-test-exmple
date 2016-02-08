'use strict';

const TestUtils        = require('react-addons-test-utils');
const React            = require('react');
const ReactDOM         = require('react-dom');
const { IntlProvider } = require('react-intl');
const messages         = { example : 'Translated' };

const wrap = Component => {

  return React.createClass({

    render () {

      return (
        <IntlProvider
          messages = { messages }
          locale   = "en"
        >
          <Component/>
        </IntlProvider>
      );

    }

  });

};

describe('component', () => {

  it('can be tested', () => {

    const Component = require.requireActual('../component.jsx');
    const WrappedComponent = wrap(Component);
    const c = TestUtils.renderIntoDocument(<WrappedComponent/>);

    expect(ReactDOM.findDOMNode(c).textContent).toContain(messages.example);

  });

});
