import React from "react";
import Plot from "react-plotly.js";

const SunburstChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Reported Cases (Year → Country)</h2>
      <Plot
        data={[
          {
            type: "sunburst",
            labels: [
              "2022", "2023", "2024",          // Years (top level)
              "Nigeria", "Ghana", "Kenya",     // Countries under 2022
              "Nigeria_2023", "Ghana_2023", "Kenya_2023",
              "Nigeria_2024", "Ghana_2024", "Kenya_2024"
            ],
            parents: [
              "", "", "",                      // Years have no parents
              "2022", "2022", "2022",          // Countries under 2022
              "2023", "2023", "2023",          // Countries under 2023
              "2024", "2024", "2024",          // Countries under 2024
            ],
            values: [
              0, 0, 0,                         // Years don't need values
              120, 90, 60,                     // 2022 values
              150, 100, 80,                    // 2023 values
              170, 130, 100                    // 2024 values
            ],
            marker: {
              colors: [
                "#cccccc", "#cccccc", "#cccccc", // Years (gray)
                "#f94144", "#f3722c", "#f8961e", // 2022 (reds/oranges)
                "#43aa8b", "#577590", "#90be6d", // 2023 (greens/blues)
                "#9c89b8", "#f9844a", "#ffa600"  // 2024 (purples/yellows)
              ],
            },
            branchvalues: "total",
            hoverinfo: "label+value+percent parent",
          },
        ]}
        layout={{
          margin: { l: 0, r: 0, b: 0, t: 40 },
          title: "Sunburst Chart of Reported Cases",
          width: 500,
          height: 500,
        }}
        config={{ responsive: true }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default SunburstChart;
