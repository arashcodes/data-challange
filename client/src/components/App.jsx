import React from 'react';
import Report from './Report.jsx';
import Stats from './Stats.jsx';
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
      view: 'monthly',
      day: '',
      most: {},
      least: {},
      highest: {},
      lowest: {}
    }

    this.renderView = this.renderView.bind(this);
    this.changeViewToMonthly = this.changeViewToMonthly.bind(this);
    this.getMonthlyData = this.getMonthlyData.bind(this);
    this.getWeek1 = this.getWeek1.bind(this);
    this.getWeek2 = this.getWeek2.bind(this);
    this.getWeek3 = this.getWeek3.bind(this);
    this.getWeek4 = this.getWeek4.bind(this);
    this.handleDailySubmit = this.handleDailySubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.findMostResponsiveRater = this.findMostResponsiveRater.bind(this);
    this.findLeastResponsiveUser = this.findLeastResponsiveUser.bind(this);
    this.findHighestAgreementRate = this.findHighestAgreementRate.bind(this);
    this.findLowestAgreementRate = this.findLowestAgreementRate.bind(this);
  }

  componentDidMount() {
    this.getMonthlyData();
  }
  
  findLeastResponsiveUser() {
    const least = {rater: '', total: Infinity}
    const data = this.state;
    
    for (let key in data) {
      if (key !== 'view' && key !== 'day' && key !== 'most' && key !== 'least' && key !== 'highest' && key !== 'lowest') {
        if (data[key].total < least.total) {
          least.rater = key;
          least.total = data[key].total;
        }
      }
    }
    this.setState({least});
  }

  findMostResponsiveRater() {
    const most = {rater: '', total: -Infinity}
    const data = this.state;
    
    for (let key in data) {
      if (key !== 'view' && key !== 'day' && key !== 'most' && key !== 'least'&& key !== 'highest' && key !== 'lowest') {
        if (data[key].total > most.total) {
          most.rater = key;
          most.total = data[key].total;
        }
      }
    }
    this.setState({most});
  }

  findHighestAgreementRate() {
    const highest = {rater: '', total: -Infinity}
    const data = this.state;
    
    for (let key in data) {
      if (key !== 'view' && key !== 'day' && key !== 'most' && key !== 'least'&& key !== 'highest' && key !== 'lowest') {
        if ((data[key].match3 + data[key].match5) > highest.total) {
          highest.rater = key;
          highest.total = parseInt(data[key].match3) + parseInt(data[key].match5);
        }
      }
    }
    this.setState({highest});
  }

  findLowestAgreementRate() {
    // TODO:
    const lowest = {rater: '', total: Infinity}
    const data = this.state;
    
    for (let key in data) {
      if (key !== 'view' && key !== 'day' && key !== 'most' && key !== 'least'&& key !== 'highest' && key !== 'lowest') {
        if ((data[key].match3 + data[key].match5) < lowest.total) {
          lowest.rater = key;
          lowest.total = parseInt(data[key].match3) + parseInt(data[key].match5);
        }
      }
    }
    this.setState({lowest});
  }

  getMonthlyData() {
    const url = 'http://localhost:3000/monthly';
    axios.get(url)
    .then(res => {
      this.setState({
        A: res.data['A'],
        B: res.data['B'],
        C: res.data['C'],
        D: res.data['D'],
        E: res.data['E'],
        view: 'monthly'
      }, () => {
        this.findMostResponsiveRater();
        this.findLeastResponsiveUser();
        this.findHighestAgreementRate();
        this.findLowestAgreementRate();
      })
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
          view: 'week 1'
        }, () => {
          this.findMostResponsiveRater();
          this.findLeastResponsiveUser();
          this.findHighestAgreementRate();
          this.findLowestAgreementRate();
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
          view: 'week 2'
        }, () => {
          this.findMostResponsiveRater();
          this.findLeastResponsiveUser();
          this.findHighestAgreementRate();
          this.findLowestAgreementRate();
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
          view: 'week 3'
        }, () => {
          this.findMostResponsiveRater();
          this.findLeastResponsiveUser();
          this.findHighestAgreementRate();
          this.findLowestAgreementRate();
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
          view: 'week 4'
        }, () => {
          this.findMostResponsiveRater();
          this.findLeastResponsiveUser();
          this.findHighestAgreementRate();
          this.findLowestAgreementRate();
        })
      })
      .catch(err => {
        throw err;
      })
  }
  
  handleDailySubmit() {
    event.preventDefault();
    if (this.state.day > '30' || this.state.day < '1') {
      alert('Invalid input')
      return null;
    }
    let day;
    if (this.state.day < '10') {
      day = 0 + this.state.day;
    } else {
      day = this.state.day;
    }

    const url = `http://localhost:3000/daily/` + day;
    const show = 'Day: ' + day;
    axios.get(url)
    .then(res => {
      this.setState({
        A: res.data['A'],
        B: res.data['B'],
        C: res.data['C'],
        D: res.data['D'],
        E: res.data['E'],
        view: show, 
      }, () => {
        this.findMostResponsiveRater();
        this.findLeastResponsiveUser();
        this.findHighestAgreementRate();
        this.findLowestAgreementRate();
      })
    })
    .catch(err => {
      throw err;
    })
  }

  handleChange() {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    })
  }

  changeViewToMonthly() {
    this.getMonthlyData();
    this.setState({
      view: 'monthly',
    });
  }

  renderView() {
    const view = this.state.view;
    if (view === 'monthly') {
      return <Report data={this.state}/>;
    } else if (view === 'week 1' || view === 'week 2' || view === 'week 3' || view === 'week 4') {
      return <Report data={this.state}/>;
    } else {
      return <Report data={this.state}/>;
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
        <form onSubmit={this.handleDailySubmit} >
          <label>
            Daily Report:
            <input type="text" name="day" placeholder="pick a date from 1 to 30" onChange={this.handleChange} value={this.state.day} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br />
        <br />
        <h2>{this.state.view}</h2>
        {this.renderView()}
        <Stats most={this.state.most} least={this.state.least} highest={this.state.highest} lowest={this.state.lowest} />
      </div>
    )
  }
}

export default App;
