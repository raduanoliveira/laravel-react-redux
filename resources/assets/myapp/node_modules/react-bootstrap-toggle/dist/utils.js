'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PADDING = {
  RIGHT: 'padding-right',
  LEFT: 'padding-left',
  TOP: 'padding-top',
  BOTTOM: 'padding-bottom'
};

var MARGIN = {
  RIGHT: 'margin-right',
  LEFT: 'margin-left',
  TOP: 'margin-top',
  BOTTOM: 'margin-bottom'
};

var getStyle = function getStyle(el, str) {
  return parseInt(getComputedStyle(el).getPropertyValue(str), 10);
};

var getTextNodeBoundingClientRect = function getTextNodeBoundingClientRect(node) {
  var newNode = node.length ? node[node.length - 1] : node;
  if (typeof document.createRange === 'function') {
    var range = document.createRange();
    if (range.getBoundingClientRect) {
      range.selectNodeContents(newNode);
      return range.getBoundingClientRect();
    }
  }
  return 0;
};

var compareWithMarginOfError = exports.compareWithMarginOfError = function compareWithMarginOfError(num1, num2, isSet) {
  return isSet || Math.abs(num1 - num2) < 1.01;
};

var getDimension = exports.getDimension = function getDimension(node) {
  var margin = {};

  var padding = {
    right: getStyle(node, PADDING.RIGHT),
    left: getStyle(node, PADDING.LEFT),
    top: getStyle(node, PADDING.TOP),
    bottom: getStyle(node, PADDING.BOTTOM)
  };

  if (node.childElementCount) {
    var child = node.childNodes[0];
    margin.height = getStyle(child, MARGIN.BOTTOM) + getStyle(child, MARGIN.TOP);
    margin.width = getStyle(child, MARGIN.LEFT) + getStyle(child, MARGIN.RIGHT);

    return {
      width: (child.scrollWidth || child.offsetWidth) + margin.width + padding.left + padding.right,
      height: (child.scrollHeight || child.offsetHeight) + margin.height + padding.top + padding.bottom
    };
  }

  var range = getTextNodeBoundingClientRect(node.childNodes);

  return {
    width: range.width + padding.right + padding.left,
    height: range.height + padding.bottom + padding.top
  };
};