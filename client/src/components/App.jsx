import React from 'react';
import Stats from './Stats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      A: {total: 2540, match3: 654, match5: 439},
      B: {total: 0, match3: 0, match5: 0},
      C: {total: 0, match3: 0, match5: 0},
      D: {total: 0, match3: 0, match5: 0},
      E: {total: 0, match3: 0, match5: 0},
    }
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
