"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEEKDAYS = exports.CALENDAR_TYPE_LOCALES = exports.CALENDAR_TYPES = void 0;

var _CALENDAR_TYPE_LOCALE;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CALENDAR_TYPES = {
  ARABIC: 'Arabic',
  HEBREW: 'Hebrew',
  ISO_8601: 'ISO 8601',
  US: 'US'
};
exports.CALENDAR_TYPES = CALENDAR_TYPES;
var CALENDAR_TYPE_LOCALES = (_CALENDAR_TYPE_LOCALE = {}, _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.US, ['en-CA', 'en-US', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-SV', 'es-VE', 'pt-BR']), _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.ARABIC, [// ar-LB, ar-MA intentionally missing
'ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LY', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-YE', 'dv', 'dv-MV', 'ps', 'ps-AR']), _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.HEBREW, ['he', 'he-IL']), _CALENDAR_TYPE_LOCALE);
exports.CALENDAR_TYPE_LOCALES = CALENDAR_TYPE_LOCALES;

var WEEKDAYS = _toConsumableArray(Array(7)).map(function (el, index) {
  return index;
});

exports.WEEKDAYS = WEEKDAYS;