import React from 'react';
import Report from './Report.jsx';
import Stats from './Stats.jsx';
import axios from 'axios';

const appStyle = {
  padding: '10px',
  width: '600px',
  border_radius: '21px 21px 21px 21px',
  _moz_border_radius: '21px 21px 21px 21px',
  _webkit_border_radius: '21px 21px 21px 21px',
  border: '3px solid #5150ff',
}

const buttonStyle = {
  box_shadow: '0px 0px 0px 2px #9fb4f2',
	background: 'linear-gradient(to bottom, #7892c2 5%, #476e9e 100%)',
	background_color: '#7892c2',
	border_radius: '10px',
	border: '1px solid #4e6096',
	display: 'inline-block',
	cursor: 'pointer',
	color: '#ffffff',
	font_family: 'Arial',
	font_size: '10px',
	padding: '5px 5px',
	text_decoration: 'none',
	text_shadow: '0px 1px 0px #283966',
}

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
    let percentage;

    for (let key in data) {
      if (key !== 'view' && key !== 'day' && key !== 'most' && key !== 'least'&& key !== 'highest' && key !== 'lowest') {

        percentage = ((parseInt(data[key].match3) + parseInt(data[key].match5)) / (parseInt((data[key].total)) * 2) * 100).toFixed(2);

        if (percentage > highest.total) {
          highest.rater = key;
          highest.total = percentage;
        }
      }
    }
    this.setState({highest});
  }

  findLowestAgreementRate() {
    const lowest = {rater: '', total: Infinity}
    const data = this.state;
    let percentage;

    for (let key in data) {
      if (key !== 'view' && key !== 'day' && key !== 'most' && key !== 'least'&& key !== 'highest' && key !== 'lowest') {

        percentage = ((parseInt(data[key].match3) + parseInt(data[key].match5)) / (parseInt((data[key].total)) * 2) * 100).toFixed(2);

        if (percentage < lowest.total) {
          lowest.rater = key;
          lowest.total = percentage;
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
    if (parseInt(this.state.day) > 30 || parseInt(this.state.day) < 1) {
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
        this.setState({day: ''});
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
      <div style={appStyle} >
        <button style={buttonStyle} onClick={this.changeViewToMonthly}>October's Report</button>
        <button style={buttonStyle} onClick={this.getWeek1}>Week 1 Report</button>
        <button style={buttonStyle} onClick={this.getWeek2}>Week 2 Report</button>
        <button style={buttonStyle} onClick={this.getWeek3}>Week 3 Report</button>
        <button style={buttonStyle} onClick={this.getWeek4}>Week 4 Report</button>
        <form onSubmit={this.handleDailySubmit} >
          <label>
            Daily Report:
            <input type="text" name="day" placeholder="pick a date from 1 to 30" onChange={this.handleChange} value={this.state.day} />
          </label>
          <input style={buttonStyle} type="submit" value="Submit" />
        </form>
        <br />
        <br />
        <h2 style={{color: '#4e6096'}}>{this.state.view}</h2>
        {this.renderView()}
        <Stats most={this.state.most} least={this.state.least} highest={this.state.highest} lowest={this.state.lowest} />
      </div>
    )
  }
}

export default App;
