'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _utils = require('./utils');

var util = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var eitherStringOrInteger = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

var ReactBootstrapToggle = function (_Component) {
  _inherits(ReactBootstrapToggle, _Component);

  function ReactBootstrapToggle() {
    _classCallCheck(this, ReactBootstrapToggle);

    var _this = _possibleConstructorReturn(this, (ReactBootstrapToggle.__proto__ || Object.getPrototypeOf(ReactBootstrapToggle)).call(this));

    _this.state = { width: null, height: null };
    _this.resizeObserver = null;
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(ReactBootstrapToggle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.width && this.props.height) {
        return;
      }
      this.setDimensions();
      if (this.props.recalculateOnResize) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function (ent, obs) {
          _this2.setDimensions();
        });
        this.resizeObserver.observe(this.parent);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.width && this.props.height) {
        return;
      }
      this.setDimensions();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // shutdown listener
      if (this.resizeObserver) {
        this.resizeObserver.unobserve(this.parent);
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(evt) {
      if (this.props.disabled) return;
      if (typeof this.props.onClick === 'function') {
        this.props.onClick(!this.props.active, this.parent, evt);
      }
    }
  }, {
    key: 'setDimensions',
    value: function setDimensions() {
      var onDim = util.getDimension(this.on);
      var offDim = util.getDimension(this.off);

      var width = Math.max(onDim.width, offDim.width);
      var height = Math.max(onDim.height, offDim.height);

      // Check if the sizes are the same with a margin of error of one pixel
      var areAlmostTheSame = util.compareWithMarginOfError(this.state.width, width, this.props.width) && util.compareWithMarginOfError(this.state.height, height, this.props.height);

      // if they are the same then return
      if (areAlmostTheSame) {
        return;
      }

      this.setState({
        width: this.props.width || width,
        height: this.props.height || height
      });
    }
  }, {
    key: 'getSizeClass',
    value: function getSizeClass() {
      if (this.props.size === 'lg') return 'btn-lg';
      if (this.props.size === 'sm') return 'btn-sm';
      if (this.props.size === 'xs') return 'btn-xs';
      return 'btn-md';
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn,
          _this3 = this;

      var _props = this.props,
          active = _props.active,
          onClick = _props.onClick,
          onstyle = _props.onstyle,
          onClassName = _props.onClassName,
          offstyle = _props.offstyle,
          offClassName = _props.offClassName,
          handlestyle = _props.handlestyle,
          handleClassName = _props.handleClassName,
          style = _props.style,
          on = _props.on,
          off = _props.off,
          className = _props.className,
          disabled = _props.disabled,
          width = _props.width,
          height = _props.height,
          recalculateOnResize = _props.recalculateOnResize,
          props = _objectWithoutProperties(_props, ['active', 'onClick', 'onstyle', 'onClassName', 'offstyle', 'offClassName', 'handlestyle', 'handleClassName', 'style', 'on', 'off', 'className', 'disabled', 'width', 'height', 'recalculateOnResize']);

      var sizeClass = this.getSizeClass();

      var s = {
        width: this.state.width || width,
        height: this.state.height || height
      };

      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        _react2.default.createElement(
          'div',
          _extends({
            role: 'button',
            disabled: disabled,
            className: (0, _classnames2.default)('btn', 'toggle', className, sizeClass, (_cn = {}, _defineProperty(_cn, 'off btn-' + offstyle, !this.props.active), _defineProperty(_cn, 'btn-' + onstyle, this.props.active), _cn)),
            onClick: this.onClick,
            style: Object.assign({}, s, style)
          }, props, {
            ref: function ref(c) {
              _this3.parent = c;
            }
          }),
          _react2.default.createElement(
            'div',
            { className: 'toggle-group' },
            _react2.default.createElement(
              'span',
              {
                ref: function ref(onLabel) {
                  _this3.on = onLabel;
                },
                className: (0, _classnames2.default)('btn toggle-on', sizeClass, onClassName, _defineProperty({}, 'btn-' + onstyle, onstyle)),
                disabled: disabled
              },
              on
            ),
            _react2.default.createElement(
              'span',
              {
                ref: function ref(offLabel) {
                  _this3.off = offLabel;
                },
                className: (0, _classnames2.default)('btn toggle-off', sizeClass, offClassName, _defineProperty({}, 'btn-' + offstyle, offstyle)),
                disabled: disabled
              },
              off
            ),
            _react2.default.createElement('span', {
              disabled: disabled,
              className: (0, _classnames2.default)('toggle-handle btn', sizeClass, handleClassName, _defineProperty({}, 'btn-' + handlestyle, handlestyle))
            })
          )
        )
      );
    }
  }]);

  return ReactBootstrapToggle;
}(_react.Component);

ReactBootstrapToggle.propTypes = {
  style: _propTypes2.default.shape(),
  // Holds the className for label one
  onstyle: _propTypes2.default.string,
  // additional className for the on component
  onClassName: _propTypes2.default.string,
  // Holds the className for label two
  offstyle: _propTypes2.default.string,
  // additional className for the off component
  offClassName: _propTypes2.default.string,
  // The className for the handle
  handlestyle: _propTypes2.default.string,
  // additional className for the handle component
  handleClassName: _propTypes2.default.string,
  // Height prop
  height: eitherStringOrInteger,
  // Width prop
  width: eitherStringOrInteger,
  // The on and off elements defaults to 'On' and 'Off'
  on: _propTypes2.default.node,
  off: _propTypes2.default.node,
  // The initial state of the component
  active: _propTypes2.default.bool,
  // Sets the button to disabled
  disabled: _propTypes2.default.bool,
  // Set the size of the button defaults to normal
  size: _propTypes2.default.string,
  // The onClick event, returns the state as the argument
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  // If the toggle should recalculate it's dimensions when visibility or dimensions change
  recalculateOnResize: _propTypes2.default.bool
};
ReactBootstrapToggle.defaultProps = {
  onstyle: 'primary',
  onClassName: '',
  offstyle: 'default',
  offClassName: '',
  handlestyle: 'default',
  handleClassName: '',
  width: '',
  height: '',
  on: 'On',
  off: 'Off',
  disabled: false,
  size: 'normal',
  active: true,
  style: {},
  recalculateOnResize: false
};
exports.default = ReactBootstrapToggle;