'use strict';

require('babel-polyfill');

const React               = require('react');
const ReactDOM            = require('react-dom');
const TestUtils           = require('react-addons-test-utils');
const wrap                = require.requireActual('./wrapIntlProvider');
global.React              = React;
global.findDOMNode        = ReactDOM.findDOMNode;
global.findWithTag        = TestUtils.findRenderedDOMComponentWithTag;
global.findWithClass      = TestUtils.findRenderedDOMComponentWithClass;
global.scryWithClass      = TestUtils.scryRenderedDOMComponentsWithClass;
global.scryWithTag        = TestUtils.scryRenderedDOMComponentsWithTag;
global.renderIntoDocument = TestUtils.renderIntoDocument;
global.Simulate           = TestUtils.Simulate;
global.wrap               = wrap;
