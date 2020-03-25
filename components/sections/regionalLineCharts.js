import LineChartComponent from "../charts/lineChart";

const RegionalLineCharts = ({ data }) => {
  console.log(data)
  return (<div className="columns is-multiline">
    <div className="column">
      <LineChartComponent
        data={ data }
        mainKey="name"
        dataKey="confirmed" />
    </div>
    <div className="column">
      <LineChartComponent
        data={ data }
        mainKey="name"
        dataKey="deaths"
        stroke="#d9534f" />
    </div>
    <div className="column">
      <LineChartComponent
        data={ data }
        mainKey="name"
        dataKey="recovered"
        stroke="#4bbf73" />
    </div>
  </div>);
}

export default RegionalLineCharts;