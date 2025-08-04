import React from "react";
import Plot from "react-plotly.js";

const BarChart = () => {
  return (
    <Plot
      data={[
        {
          x: ["Nigeria", "Ghana", "Benin", "Togo", "Cameroon"],
          y: [150, 200, 180, 170, 120.],
          name: "2020",
          type: "bar",
        },
        {
          x: ["Nigeria", "Ghana", "Benin", "Togo", "Cameroon"],
          y: [120, 160, 190, 170, 120.],
          name: "2021",
          type: "bar",
        },
        {
          x: ["Nigeria", "Ghana", "Benin", "Togo", "Cameroon"],
          y: [170, 210, 200, 170, 120.],
          name: "2022",
          type: "bar",
        },
        {
          x: ["Nigeria", "Ghana", "Benin", "Togo", "Cameroon"],
          y: [170, 210, 200, 170, 120.],
          name: "2023",
          type: "bar",
        },
        {
          x: ["Nigeria", "Ghana", "Benin", "Togo", "Cameroon"],
          y: [170, 210, 200, 170, 120.],
          name: "2024",
          type: "bar",
        },
      ]}
      layout={{
        title: {
          text: "Reported Cases by Country and Year",
          x: 0.5,
        },
        barmode: "group", // 👈 Group bars side by side
        xaxis: { title: "Country" },
        yaxis: { title: "Reported Cases" },
      }}
      config={{ responsive: true }}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default BarChart;


/**
 * # Keywords for diseases you're interested in
KEYWORDS = [
    "covid", "ebola", "hepatitis", "chicken pox", "meningitis",
    "pertussis", "diphtheria", "tetanus", "sti", "sexually transmitted",
    "hantavirus", "measles", "dengue", "lassa", "salmonella", "ringworm"
]

@app.route('/api/indicators')
def get_indicators():
    url = "https://ghoapi.azureedge.net/api/WHS3_62?$filter=SpatialDim eq 'NGA' and TimeDim ge 2020 and TimeDim le 2024"
    response = requests.get(url)
    

    if response.status_code != 200:
        return jsonify({"error": f"Upstream API returned {response.status_code}"}), 502

    try:
        data = response.json()
    except ValueError:
        print("Invalid JSON received:", response.text)
        return jsonify({"error": "Invalid JSON received from API"}), 500

    return jsonify(data)


if __name__ == '__main__':
    app.run(port=5000, debug=True)
 */