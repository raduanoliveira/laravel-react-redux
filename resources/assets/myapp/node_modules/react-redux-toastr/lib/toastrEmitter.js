"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toastrEmitter = exports.EE = void 0;

var _utils = require("./utils.js");

var _eventemitter = _interopRequireDefault(require("eventemitter3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var emitter = new _eventemitter["default"]();

var addToToastr = function addToToastr(type, array) {
  return emitter.emit('add/toastr', (0, _utils.mapToToastrMessage)(type, array));
};

var actions = {};
['light', 'message', 'info', 'success', 'warning', 'error'].forEach(function (item) {
  actions[item] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return addToToastr(item, args);
  };
});

actions.clean = function () {
  return emitter.emit('clean/toastr');
};
/**
 * @params: can be a ID or a object that with a property type: 'success'
 * and by passing this we will remove all toastr with that type.
 */


actions.removeByType = function (type) {
  return emitter.emit('removeByType/toastr', type);
};

actions.remove = function (id) {
  return emitter.emit('remove/toastr', id);
};

actions.confirm = function () {
  emitter.emit('toastr/confirm', {
    message: arguments.length <= 0 ? undefined : arguments[0],
    options: (arguments.length <= 1 ? undefined : arguments[1]) || {}
  });
};

var EE = emitter;
exports.EE = EE;
var toastrEmitter = actions;
exports.toastrEmitter = toastrEmitter;