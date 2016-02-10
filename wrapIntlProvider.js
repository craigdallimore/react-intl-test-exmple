'use strict';

const React            = require('react');
const { IntlProvider } = require('react-intl');
const messages         = { example : 'Translated' };

const wrap = (Component) => {

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

module.exports = wrap;
