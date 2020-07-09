import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

/**
 * Report is a stateful child component to App. It receives data from App and feeds data to the bar chart imported from 'Recharts' library.
 */
class Report extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {}

    this.filterData = this.filterData.bind(this);
  }

  /**
   * This method filters the data received from the parent component to be reflected in the bar chart.
   */
  filterData() {
    const data = [this.props.data];
    const sorted = [];
    for (let key in data[0]) {
      if (key !== 'view' && key !== 'day' && key !== 'most' && key !== 'least'&& key !== 'highest' && key !== 'lowest')
      sorted.push(data[0][key])
    }
    return sorted;
  }

  render() {
    return (
      <div>
      <BarChart
        width={500}
        height={300}
        data={this.filterData()}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="rater" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="total responses" dataKey="total" fill="#8884d8" />
        <Bar name="agreement on 3 label" dataKey="match3" fill="#82ca9d" />
        <Bar name="agreement on 5 label" dataKey="match5" fill="#ffc658" />
      </BarChart>
        <br />
        <br />
      </div>
    );
  }
}

export default Report;
