"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSITIONS = exports.REMOVE_BY_TYPE = exports.HIDE_CONFIRM = exports.SHOW_CONFIRM = exports.CLEAN_TOASTR = exports.REMOVE_TOASTR = exports.ADD_TOASTR = void 0;
var ADD_TOASTR = '@ReduxToastr/toastr/ADD';
exports.ADD_TOASTR = ADD_TOASTR;
var REMOVE_TOASTR = '@ReduxToastr/toastr/REMOVE';
exports.REMOVE_TOASTR = REMOVE_TOASTR;
var CLEAN_TOASTR = '@ReduxToastr/toastr/CLEAN';
exports.CLEAN_TOASTR = CLEAN_TOASTR;
var SHOW_CONFIRM = '@ReduxToastr/confirm/SHOW';
exports.SHOW_CONFIRM = SHOW_CONFIRM;
var HIDE_CONFIRM = '@ReduxToastr/confirm/HIDE';
exports.HIDE_CONFIRM = HIDE_CONFIRM;
var REMOVE_BY_TYPE = '@ReduxToastr/toastr/REMOVE_BY_TYPE'; // before add a new transition - check its presence in src/styles/animations.scss

exports.REMOVE_BY_TYPE = REMOVE_BY_TYPE;
var TRANSITIONS = {
  "in": ['bounceIn', 'bounceInDown', 'fadeIn'],
  out: ['bounceOut', 'bounceOutUp', 'fadeOut']
};
exports.TRANSITIONS = TRANSITIONS;