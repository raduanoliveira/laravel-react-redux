"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ENTER = 13;
var ESC = 27;

var ToastrConfirm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToastrConfirm, _React$Component);

  function ToastrConfirm(props) {
    var _this;

    _classCallCheck(this, ToastrConfirm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToastrConfirm).call(this, props));
    var _this$props = _this.props,
        confirmOptions = _this$props.confirmOptions,
        confirm = _this$props.confirm;
    var _confirm$options = confirm.options,
        okText = _confirm$options.okText,
        cancelText = _confirm$options.cancelText,
        transitionIn = _confirm$options.transitionIn,
        transitionOut = _confirm$options.transitionOut,
        disableCancel = _confirm$options.disableCancel;
    _this.okText = okText || confirmOptions.okText;
    _this.cancelText = cancelText || confirmOptions.cancelText;
    _this.transitionIn = transitionIn || confirmOptions.transitionIn || props.transitionIn;
    _this.transitionOut = transitionOut || confirmOptions.transitionOut || props.transitionOut;
    _this.disableCancel = disableCancel || confirmOptions.disableCancel;
    (0, _utils._bind)('setTransition removeConfirm handleOnKeyUp handleOnKeyDown', _assertThisInitialized(_this));
    _this.isKeyDown = false; // an identifier to facilitate aria labelling for a11y for multiple instances of the component family in the DOM

    _this.id = Math.floor(Math.random() * 9999);
    return _this;
  }

  _createClass(ToastrConfirm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isHiding = false;
      this.hasClicked = false;
      this.confirmHolderElement.focus();

      if (this.props.confirm.show) {
        this.setTransition(true);
      } // when toast loads the toast close button automatically focuses on the toast control


      if (this.closeButton !== undefined && this.closeButton.focus !== undefined) {
        this.closeButton.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // when toast unloads the toast close button automatically focuses on the next toast control (if any)
      // need to add a micro delay to allow the DOM to recycle
      setTimeout(function () {
        if (document.getElementsByClassName('toastr-control').length > 0) {
          document.getElementsByClassName('toastr-control')[0].focus();
        }
      }, 50);
    }
  }, {
    key: "handleOnKeyDown",
    value: function handleOnKeyDown(e) {
      if ((0, _utils.keyCode)(e) == ENTER) {
        e.preventDefault();
      }

      this.isKeyDown = true;
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(callback) {
      var _this2 = this;

      if (this.hasClicked) return;
      this.hasClicked = true;

      var onAnimationEnd = function onAnimationEnd() {
        _this2.removeConfirm();

        if (callback) {
          callback();
        }
      };

      this.setTransition();
      (0, _utils.onCSSTransitionEnd)(this.confirmElement, onAnimationEnd);
    }
  }, {
    key: "handleConfirmClick",
    value: function handleConfirmClick() {
      var callback = this.props.confirm.options ? this.props.confirm.options.onOk : null;
      this.handleButtonClick(callback);
    }
  }, {
    key: "handleCancelClick",
    value: function handleCancelClick() {
      var callback = this.props.confirm.options ? this.props.confirm.options.onCancel : null;
      this.handleButtonClick(callback);
    }
  }, {
    key: "setTransition",
    value: function setTransition(add) {
      if (add) {
        this.isHiding = false;
        this.confirmElement.classList.add(this.transitionIn);
        if ((0, _utils.isBrowser)()) return document.querySelector('body').classList.add('toastr-confirm-active');
      }

      this.isHiding = true;
      this.confirmElement.classList.remove(this.transitionIn);
      this.confirmElement.classList.add(this.transitionOut);
    }
  }, {
    key: "removeConfirm",
    value: function removeConfirm() {
      this.isHiding = false;
      this.props.hideConfirm();
      if ((0, _utils.isBrowser)()) return document.querySelector('body').classList.remove('toastr-confirm-active');
    }
  }, {
    key: "handleOnKeyUp",
    value: function handleOnKeyUp(e) {
      var code = (0, _utils.keyCode)(e);

      if (code == ESC && !this.disableCancel) {
        this.handleCancelClick();
      } else if (code == ESC && this.disableCancel) {
        this.handleConfirmClick();
      } else if (code == ENTER && this.isKeyDown) {
        this.isKeyDown = false;
        this.handleConfirmClick();
      }
    }
  }, {
    key: "containsOkButton",
    value: function containsOkButton(buttons) {
      return buttons && buttons.filter(function (button) {
        return button.ok === true;
      }).length > 0;
    }
  }, {
    key: "containsCancelButton",
    value: function containsCancelButton(buttons) {
      return buttons && buttons.filter(function (button) {
        return button.cancel === true;
      }).length > 0;
    }
  }, {
    key: "getCustomButtonHandler",
    value: function getCustomButtonHandler(config) {
      var _this3 = this;

      if (config.ok === true) {
        return this.handleConfirmClick.bind(this);
      }

      if (config.cancel === true) {
        return this.handleCancelClick.bind(this);
      }

      return function () {
        return _this3.handleButtonClick(config.handler);
      };
    }
  }, {
    key: "getCustomButtonText",
    value: function getCustomButtonText(config) {
      if (config.ok === true) {
        return this.okText;
      }

      if (config.cancel === true) {
        return this.cancelText;
      }

      return config.text;
    }
  }, {
    key: "getCustomButtonClassName",
    value: function getCustomButtonClassName(config) {
      if (config.ok === true) {
        return 'rrt-ok-btn';
      }

      if (config.cancel === true) {
        return 'rrt-cancel-btn';
      }

      return config.className;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props$confirm = this.props.confirm,
          options = _this$props$confirm.options,
          message = _this$props$confirm.message;
      var wrapperProps = {};
      options.id && (wrapperProps.id = options.id);
      return _react["default"].createElement("div", _extends({
        className: "rrt-confirm-holder",
        tabIndex: "-1",
        ref: function ref(_ref2) {
          return _this4.confirmHolderElement = _ref2;
        },
        onKeyDown: this.handleOnKeyDown,
        onKeyUp: this.handleOnKeyUp,
        role: "alert"
      }, wrapperProps), _react["default"].createElement("div", {
        className: "rrt-confirm animated",
        ref: function ref(_ref) {
          return _this4.confirmElement = _ref;
        },
        role: "alertdialog",
        "aria-describedby": "dialogDesc-".concat(this.id)
      }, message && _react["default"].createElement("div", {
        className: "rrt-message",
        id: "dialogDesc-".concat(this.id)
      }, message), options.component && _react["default"].createElement(options.component, null), _react["default"].createElement("div", {
        className: "rrt-buttons-holder"
      }, !this.containsOkButton(options.buttons) && _react["default"].createElement(_Button["default"], {
        tabIndex: "0",
        innerRef: function innerRef(ref) {
          return _this4.closeButton = ref;
        },
        className: "rrt-ok-btn toastr-control",
        onClick: function onClick() {
          return _this4.handleConfirmClick();
        }
      }, this.okText), !this.disableCancel && !this.containsCancelButton(options.buttons) && _react["default"].createElement(_Button["default"], {
        tabIndex: "0",
        innerRef: function innerRef(ref) {
          return _this4.closeButton = ref;
        },
        className: "rrt-cancel-btn toastr-control",
        onClick: this.handleCancelClick.bind(this)
      }, this.cancelText), options.buttons && options.buttons.map(function (button, index) {
        if (button.cancel === true && _this4.disableCancel) {
          return null;
        }

        var handler = _this4.getCustomButtonHandler(button);

        var text = _this4.getCustomButtonText(button);

        var className = _this4.getCustomButtonClassName(button);

        return _react["default"].createElement(_Button["default"], {
          tabIndex: "0",
          className: className,
          onClick: handler,
          key: index
        }, text);
      }))), _react["default"].createElement("div", {
        className: "shadow"
      }));
    }
  }]);

  return ToastrConfirm;
}(_react["default"].Component);

exports["default"] = ToastrConfirm;

_defineProperty(ToastrConfirm, "displayName", 'ToastrConfirm');

_defineProperty(ToastrConfirm, "propTypes", {
  confirm: _propTypes["default"].shape({
    options: _propTypes["default"].shape({
      transitionIn: _propTypes["default"].string,
      transitionOut: _propTypes["default"].string
    })
  })
});