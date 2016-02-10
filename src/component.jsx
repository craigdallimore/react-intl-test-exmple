'use strict';

const React          = require('react');
const { injectIntl } = require('react-intl');
const action         = require('./action');

const Example = React.createClass({

  _buttonClicked() {

    console.log('Button clicked, will call action');
    action();

  },

  render() {

    return (
      <button
        onClick = { this._buttonClicked }
      >
        { this.props.intl.formatMessage({ id : 'example' }) }
      </button>
    );

  }

});

module.exports = injectIntl(Example);
