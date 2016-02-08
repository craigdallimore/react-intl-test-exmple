'use strict';

const React            = require('react');
const { IntlProvider } = require('react-intl');
const messages         = { example : 'Translated' };

const wrap = (Component, props) => {

  return React.createClass({

    render () {

      return (
        <IntlProvider
          messages = { messages }
          locale   = "en"
        >
          <Component {...props}/>
        </IntlProvider>
      );

    }

  });

};

module.exports = wrap;
