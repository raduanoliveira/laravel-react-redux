import React from 'react';
import Months from './YearView/Months';
export default function YearView(props) {
  function renderMonths() {
    return React.createElement(Months, props);
  }

  return React.createElement("div", {
    className: "react-calendar__year-view"
  }, renderMonths());
}