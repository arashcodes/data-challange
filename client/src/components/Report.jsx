import React, { PureComponent } from 'react';
import Stats from './Stats.jsx';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Report extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      most: '',
      least: '',
    }

    this.sortData = this.sortData.bind(this);
    this.findMostResponsiveRater = this.findMostResponsiveRater.bind(this);
    this.findLeastResponsiveUser = this.findLeastResponsiveUser.bind(this);
  }

  componentWillMount() {
    this.findMostResponsiveRater();
    this.findLeastResponsiveUser();
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

  findMostResponsiveRater() {
    const most = {rater: '', total: 0}
    const data = this.props.data;
    
    for (let key in data) {
      if (key !== 'view') {
        if (data[key].total > most.total) {
          most.rater = key;
          most.total = data[key].total;
        }
      }
    }
    this.setState({most});
  }

  findLeastResponsiveUser() {
    const least = {rater: '', total: Infinity}
    const data = this.props.data;
    
    for (let key in data) {
      if (key !== 'view') {
        if (data[key].total < least.total) {
          least.rater = key;
          least.total = data[key].total;
        }
      }
    }
    this.setState({least});
  }

  render() {
    return (
      <div>
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
        <Bar name="total responses" dataKey="total" fill="#8884d8" />
        <Bar name="agreement on 3 label answers" dataKey="match3" fill="#82ca9d" />
        <Bar name="agreement on 5 label answers" dataKey="match5" fill="#ffc658" />
      </BarChart>
        <br />
        <br />
        <Stats stats={this.state}/>
      </div>
    );
  }
}

export default Report;
