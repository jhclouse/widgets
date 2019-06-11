import React from "react";

import { LineChart } from "react-chartkick";
import "chart.js";

//
// Reduce widget data into a map from production year to revenue
//

const rollUpData = widgets => {
  const dataReducer = (data, widget) => {
    const year = new Date(widget.timestamp).getFullYear();

    data.hasOwnProperty(year)
      ? (data[year] += widget.revenue)
      : (data[year] = widget.revenue);

    return data;
  };

  return widgets.reduce(dataReducer, {});
};

export default ({ widgets }) => <LineChart data={rollUpData(widgets)} />;
