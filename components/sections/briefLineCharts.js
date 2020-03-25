import LineChartComponent from "../charts/lineChart";

const BriefLineCharts = ({ data }) => {

  return (
    <div className="columns is-multiline">
      <div className="column">
        <LineChartComponent
          data={ data }
          brush="true"
          mainKey="name" />
      </div>
    </div>
  );
}

export default BriefLineCharts;