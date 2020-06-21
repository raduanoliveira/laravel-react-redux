"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar(props) {
    var _this;

    _classCallCheck(this, ProgressBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).call(this, props));
    _this.state = {
      percent: 100
    };
    _this.intervalId = null;
    return _this;
  }

  _createClass(ProgressBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var distance = 100 / (this.props.duration / 10);
      this.intervalId = setInterval(function () {
        var percent = _this2.state.percent - distance;

        _this2.setState({
          percent: percent > 0 ? percent : 0
        });
      }, 10);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.percent <= 0 && this.intervalId) {
        clearTimeout(this.intervalId);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.intervalId) {
        clearTimeout(this.intervalId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var percent = this.state.percent;
      return _react["default"].createElement("div", {
        className: "rrt-progress-container"
      }, _react["default"].createElement("div", {
        className: "rrt-progressbar",
        style: {
          width: "".concat(percent, "%")
        }
      }));
    }
  }]);

  return ProgressBar;
}(_react["default"].Component);

exports["default"] = ProgressBar;

_defineProperty(ProgressBar, "displayName", 'ProgressBar');

_defineProperty(ProgressBar, "propTypes", {
  duration: _propTypes["default"].number.isRequired
});