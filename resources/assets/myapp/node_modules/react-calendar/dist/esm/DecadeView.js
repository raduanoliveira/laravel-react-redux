import React from 'react';
import Years from './DecadeView/Years';
export default function DecadeView(props) {
  function renderYears() {
    return React.createElement(Years, props);
  }

  return React.createElement("div", {
    className: "react-calendar__decade-view"
  }, renderYears());
}