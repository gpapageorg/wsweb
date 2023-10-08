import React from "react";

import Chart from "react-apexcharts";

const Graphs = () => {
  const options = {
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Satd", "Sun"]
    }
  };
  const series = [
    {
      name: "skata-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    },
    {
      name: "skata-2",
      data: [23, 12, 54, 61, 32, 56, 30, 19]
    },
    {
      name: "skata-3",
      data: [24, 20, 5, 75, 42, 79, 72, 35]
    }
    ,
    {
      name: "skata-4",
      data: [24, 12, 25, 55, 22, 19, 52, 35]
    }
  ];

  return <Chart options={options} series={series} type="area" height = {"200%"} width = {"50%"} />;
};
export default Graphs;
