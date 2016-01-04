/**
 * CANNOT use `import` to import `react-ie8`,
 * because `import` will be transformed to `Object.defineProperty` by babel,
 * `Object.defineProperty` doesn't exists in IE8,
 * (but will be polyfilled after `require('react-ie8')` executed).
 */

require('react-ie8');
require('es6-promise');
require('fetch-ie8');

/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('react-ie8')()`.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);