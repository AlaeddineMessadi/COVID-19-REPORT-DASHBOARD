import LineChartComponent from "../charts/lineChart";
import { COLORS } from "../../utils/constants";

const RegionalLineCharts = ({ data }) => {

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
        stroke={ COLORS.deaths } />
    </div>
    <div className="column">
      <LineChartComponent
        data={ data }
        mainKey="name"
        dataKey="recovered"
        stroke={ COLORS.recovered } />
    </div>
  </div>);
}

export default RegionalLineCharts;