import ChartBar from "./ChartBars";
import './Chart.css'

const Chart = (props) => {

    const totalPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...totalPointsValue)
     return <div className="chart">
       {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value = {dataPoint.value} maxValue = {totalMaximum} label={dataPoint.label}/>)}
     </div>
}
export default Chart;