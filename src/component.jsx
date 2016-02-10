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

    // if I add a `ref` attribute to this component:
    // Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can
    // have refs. You might be adding a ref to a component that was not created
    // inside a component's `render` method, or you have multiple copies of
    // React loaded (details: https://fb.me/react-refs-must-have-owner).

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
