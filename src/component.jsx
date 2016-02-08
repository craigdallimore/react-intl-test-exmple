'use strict';

const { injectIntl } = require('react-intl');
const React = require('react');

const Example = React.createClass({

  render() {

    return <h1>{ this.props.intl.formatMessage({ id : 'example' }) }</h1>;

  }

});

module.exports = injectIntl(Example);
