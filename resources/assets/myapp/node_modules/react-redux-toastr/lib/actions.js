"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.removeByType = exports.hideConfirm = exports.showConfirm = exports.remove = exports.clean = void 0;

var _constants = require("./constants");

var _utils = require("./utils");

var _reducer = require("./reducer");

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function add(toastr) {
  if (_config["default"].preventDuplicates && (0, _utils.preventDuplication)(_reducer.toastrsCache, toastr)) {
    return {
      type: _constants.ADD_TOASTR,
      payload: {
        ignoreToastr: true
      }
    };
  }

  return {
    type: _constants.ADD_TOASTR,
    payload: toastr
  };
}

var clean = function clean() {
  return {
    type: _constants.CLEAN_TOASTR
  };
};

exports.clean = clean;

var remove = function remove(payload) {
  return {
    type: _constants.REMOVE_TOASTR,
    payload: payload
  };
};

exports.remove = remove;

var showConfirm = function showConfirm(payload) {
  return {
    type: _constants.SHOW_CONFIRM,
    payload: payload
  };
};

exports.showConfirm = showConfirm;

var hideConfirm = function hideConfirm() {
  return {
    type: _constants.HIDE_CONFIRM
  };
};

exports.hideConfirm = hideConfirm;

var removeByType = function removeByType(payload) {
  return {
    type: _constants.REMOVE_BY_TYPE,
    payload: payload
  };
};

exports.removeByType = removeByType;