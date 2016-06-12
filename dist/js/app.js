(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _hello = require('./hello.js');

var _hello2 = _interopRequireDefault(_hello);

var _ivent = require('./ivent.js');

var _ivent2 = _interopRequireDefault(_ivent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hello2.default)();
(0, _ivent2.default)();

},{"./hello.js":2,"./ivent.js":3}],2:[function(require,module,exports){
'use strict';

var HelloAlert = function HelloAlert() {
  console.log('Moduleとして呼び出し成功したよ');
};

module.exports = HelloAlert;

},{}],3:[function(require,module,exports){
'use strict';

var buttonFunction = function buttonFunction() {
  var text = document.getElementById('id');
  text.addEventListener('click', function () {
    text.style.color = '#E0575B';
  });
};

module.exports = buttonFunction;

},{}]},{},[1]);
