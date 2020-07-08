import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];

class Monthly extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      
    }

    this.sortData = this.sortData.bind(this);
  }

  sortData() {
    const data = [this.props.data];
    const sorted = [];
    for (let key in data[0]) {
      if (key !== 'view')
      sorted.push(data[0][key])
    }
    return sorted;
  }

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.sortData()}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="rater" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
        <Bar dataKey="match3" fill="#82ca9d" />
        <Bar dataKey="match5" fill="#ffc658" />
      </BarChart>
    );
  }
}

export default Monthly;
