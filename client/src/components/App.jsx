import React from 'react';
import Report from './Report.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      A: {rater: '', total: 0, match3: 0, match5: 0},
      B: {rater: '', total: 0, match3: 0, match5: 0},
      C: {rater: '', total: 0, match3: 0, match5: 0},
      D: {rater: '', total: 0, match3: 0, match5: 0},
      E: {rater: '', total: 0, match3: 0, match5: 0},
      view: '',
    }
    this.getRaterDataA = this.getRaterDataA.bind(this);
    this.getRaterDataB = this.getRaterDataB.bind(this);
    this.getRaterDataC = this.getRaterDataC.bind(this);
    this.getRaterDataD = this.getRaterDataD.bind(this);
    this.getRaterDataE = this.getRaterDataE.bind(this);
    this.getAllRatersData = this. getAllRatersData.bind(this);
    this.renderView = this.renderView.bind(this);
    this.changeViewToMonthly = this.changeViewToMonthly.bind(this);
    this.getWeek1 = this.getWeek1.bind(this);
    this.getWeek2 = this.getWeek2.bind(this);
    this.getWeek3 = this.getWeek3.bind(this);
    this.getWeek4 = this.getWeek4.bind(this);
  }

  componentDidMount() {
    this.getAllRatersData();
  }
  
  getAllRatersData() {
    this.getRaterDataA();
    this.getRaterDataB();
    this.getRaterDataC();
    this.getRaterDataD();
    this.getRaterDataE();
  }

  getRaterDataA() {
    const url = `http://localhost:3000/rater/A`;
    axios.get(url)
      .then(res => {
        this.setState({A: {
          rater: 'A',
          total: res.data.total,
          match3: res.data.match3,
          match5: res.data.match5,
        }})
      })
      .catch(err => {
        throw err;
      })
  }

  getRaterDataB() {
    const url = `http://localhost:3000/rater/B`;
    axios.get(url)
      .then(res => {
        this.setState({B: {
          rater: 'B',
          total: res.data.total,
          match3: res.data.match3,
          match5: res.data.match5,
        }})
      })
      .catch(err => {
        throw err;
      })
  }

  getRaterDataC() {
    const url = `http://localhost:3000/rater/C`;
    axios.get(url)
      .then(res => {
        this.setState({C: {
          rater: 'C',
          total: res.data.total,
          match3: res.data.match3,
          match5: res.data.match5,
        }})
      })
      .catch(err => {
        throw err;
      })
  }

  getRaterDataD() {
    const url = `http://localhost:3000/rater/D`;
    axios.get(url)
      .then(res => {
        this.setState({D: {
          rater: 'D',
          total: res.data.total,
          match3: res.data.match3,
          match5: res.data.match5,
        }})
      })
      .catch(err => {
        throw err;
      })
  }

  getRaterDataE() {
    const url = `http://localhost:3000/rater/E`;
    axios.get(url)
      .then(res => {
        this.setState({E: {
          rater: 'E',
          total: res.data.total,
          match3: res.data.match3,
          match5: res.data.match5,
        }})
      })
      .catch(err => {
        throw err;
      })
  }
  
  getWeek1() {
    const url = 'http://localhost:3000/weekly/1';
    
    axios.get(url)
      .then(res => {
        this.setState({
          A: res.data['A'],
          B: res.data['B'],
          C: res.data['C'],
          D: res.data['D'],
          E: res.data['E'],
        })
      })
      .catch(err => {
        throw err;
      })
  }

  getWeek2() {
    const url = 'http://localhost:3000/weekly/2';
    
    axios.get(url)
      .then(res => {
        this.setState({
          A: res.data['A'],
          B: res.data['B'],
          C: res.data['C'],
          D: res.data['D'],
          E: res.data['E'],
        })
      })
      .catch(err => {
        throw err;
      })
  }

  getWeek3() {
    const url = 'http://localhost:3000/weekly/3';
    
    axios.get(url)
      .then(res => {
        this.setState({
          A: res.data['A'],
          B: res.data['B'],
          C: res.data['C'],
          D: res.data['D'],
          E: res.data['E'],
        })
      })
      .catch(err => {
        throw err;
      })
  }

  getWeek4() {
    const url = 'http://localhost:3000/weekly/4';
    
    axios.get(url)
      .then(res => {
        this.setState({
          A: res.data['A'],
          B: res.data['B'],
          C: res.data['C'],
          D: res.data['D'],
          E: res.data['E'],
        })
      })
      .catch(err => {
        throw err;
      })
  }

  changeViewToMonthly() {
    this.getAllRatersData();
    this.setState({
      view: 'monthly',
    });
  }

  renderView() {
    const view = this.state.view;
    if (view === 'monthly') {
      return <Report data={this.state}/>;
    } else if (view === 'weekly') {
      // TODO: Add component to show weekly report
    } else if (view === 'daily') {
      // TODO: Add component to show daily report
    }
  }

  render() {
    return(
      <div>
      <button onClick={this.changeViewToMonthly}>Month's Report</button>
      <button onClick={this.getWeek1}>Week 1 Report</button>
      <button onClick={this.getWeek2}>Week 2 Report</button>
      <button onClick={this.getWeek3}>Week 3 Report</button>
      <button onClick={this.getWeek4}>Week 4 Report</button>
      <br />
      <br />
      {this.renderView()}
      </div>
    )
  }
}

export default App;
