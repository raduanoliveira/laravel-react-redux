import React from 'react';
import Decades from './CenturyView/Decades';
export default function CenturyView(props) {
  function renderDecades() {
    return React.createElement(Decades, props);
  }

  return React.createElement("div", {
    className: "react-calendar__century-view"
  }, renderDecades());
}