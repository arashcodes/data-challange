import React from 'react';
import Stats from './Stats.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      A: {total: 0, match3: 0, match5: 0},
      B: {total: 0, match3: 0, match5: 0},
      C: {total: 0, match3: 0, match5: 0},
      D: {total: 0, match3: 0, match5: 0},
      E: {total: 0, match3: 0, match5: 0},
    }
    this.getRaterDataA = this.getRaterDataA.bind(this);
    this.getRaterDataB = this.getRaterDataB.bind(this);
    this.getRaterDataC = this.getRaterDataC.bind(this);
    this.getRaterDataD = this.getRaterDataD.bind(this);
    this.getRaterDataE = this.getRaterDataE.bind(this);
  }

  componentDidMount() {
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
        this.setState({A: res.data})
      })
      .catch(err => {
        throw err;
      })
  }

  getRaterDataB() {
    const url = `http://localhost:3000/rater/B`;
    axios.get(url)
      .then(res => {
        this.setState({B: res.data})
      })
      .catch(err => {
        throw err;
      })
  }

  getRaterDataC() {
    const url = `http://localhost:3000/rater/C`;
    axios.get(url)
      .then(res => {
        this.setState({C: res.data})
      })
      .catch(err => {
        throw err;
      })
  }

  getRaterDataD() {
    const url = `http://localhost:3000/rater/D`;
    axios.get(url)
      .then(res => {
        this.setState({D: res.data})
      })
      .catch(err => {
        throw err;
      })
  }

  getRaterDataE() {
    const url = `http://localhost:3000/rater/E`;
    axios.get(url)
      .then(res => {
        this.setState({E: res.data})
      })
      .catch(err => {
        throw err;
      })
  }

  render() {
    return(
      <div>
      <Stats stats={this.state}/>
      </div>
    )
  }
}

export default App;
