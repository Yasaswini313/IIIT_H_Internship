import {Component} from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';



class MyPieChart extends Component{

    getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;


    render(){
        const {data} = this.props
        return(
            <div className='fun'>
                <PieChart width={250} height={250}>
                    <Pie
                    data={data}
                    cx={110}
                    cy={100}
                    outerRadius={80}
                    innerRadius={50}
                    fill="#8884d8"
                    label
                    dataKey="value"
                    >
                    {data.map(item => (
                        <Cell key={item.name} fill={this.getRandomColor()} />
                    ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                    </PieChart>
            </div>
            );
    }
} 

export default MyPieChart;
