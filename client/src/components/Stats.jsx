import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }



  render() {
    return(
      <div>
      <li>Rater A agreement total responses: {this.props.stats['A'].total}</li>
      <li>Rater A agreement on 3 label answers: {this.props.stats['A'].match3}</li>
      <li>Rater A agreement on 5 label answers: {this.props.stats['A'].match5}</li>
      <br/>
      <li>Rater B agreement total responses: {this.props.stats['B'].total}</li>
      <li>Rater B agreement on 3 label answers: {this.props.stats['B'].match3}</li>
      <li>Rater B agreement on 5 label answers: {this.props.stats['B'].match5}</li>
      <br/>
      <li>Rater C agreement total responses: {this.props.stats['C'].total}</li>
      <li>Rater C agreement on 3 label answers: {this.props.stats['C'].match3}</li>
      <li>Rater C agreement on 5 label answers: {this.props.stats['C'].match5}</li>
      <br/>
      <li>Rater D agreement total responses: {this.props.stats['D'].total}</li>
      <li>Rater D agreement on 3 label answers: {this.props.stats['D'].match3}</li>
      <li>Rater D agreement on 5 label answers: {this.props.stats['D'].match5}</li>
      <br/>
      <li>Rater E agreement total responses: {this.props.stats['E'].total}</li>
      <li>Rater E agreement on 3 label answers: {this.props.stats['E'].match3}</li>
      <li>Rater E agreement on 5 label answers: {this.props.stats['E'].match5}</li>
    </div>
    )
  }
}

export default Stats;
