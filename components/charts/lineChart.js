import { LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { capitalizeFirstLetter } from "../../utils";

const LineChartComponent = ({ data, dataKey, mainKey = "name", stroke = '#8884d8', fill = '#8884d8' }) => {

  return (
    <div className="box" style={ { padding: '15px 0 0 0' } } >
      <p className="subtitle has-text-centered no-margin-bottom" >{ capitalizeFirstLetter(dataKey) }</p>
      <div style={ { width: '100%', height: 300, padding: '1.25rem' } }>
        <ResponsiveContainer>
          <LineChart data={ data }
            margin={ { top: 5, right: 30, left: 0, bottom: 0 } }>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={ mainKey } />
            <YAxis />
            <Tooltip />
            <Line type='monotone' dataKey={ dataKey } stroke={ stroke } />
            <Brush />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default LineChartComponent;