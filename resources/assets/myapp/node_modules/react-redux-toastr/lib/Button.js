"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(props) {
  return _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return props.onClick();
    },
    className: 'rrt-button ' + props.className,
    ref: props.innerRef
  }, props.children);
};

Button.displayName = 'ReduxConfirmButton';
var _default = Button;
exports["default"] = _default;