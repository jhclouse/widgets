import React from "react";

import { LineChart } from "react-chartkick";
import "chart.js";

//
// Reduce widget data into a map from production year to revenue
//

const rollUpData = widgets => {
  const dataReducer = (outputDataObject, widget) => {
    const year = new Date(widget.timestamp).getFullYear();

    outputDataObject.hasOwnProperty(year)
      ? (outputDataObject[year] += widget.revenue)
      : (outputDataObject[year] = widget.revenue);

    return outputDataObject;
  };

  return widgets.reduce(dataReducer, {});
};

export default ({ widgets }) => <LineChart data={rollUpData(widgets)} />;
