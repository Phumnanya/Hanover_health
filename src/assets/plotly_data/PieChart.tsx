import React from "react";
import Plot from "react-plotly.js";

const PieChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recorded Death Rates</h2>
      <Plot
        data={[
          {
            type: "pie",
            labels: ["Apples", "Bananas", "Cherries", "Dates"],
            values: [10, 20, 30, 40],
            textinfo: "label+percent",
            insidetextorientation: "radial",
          },
        ]}
        layout={{
          title: {
            text: "{Year}",
            font: { size: 20 },
            x: 0.5,
            xanchor: "center",
          },
          height: 400,
          width: 500,
        }}
        config={{ responsive: true }}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PieChart;
