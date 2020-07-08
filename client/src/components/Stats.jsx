import React from 'react';

const Stats = (props) => {
  return(
    <div>
        <li>Rater {props.stats.most.rater} has the most responses of all: {props.stats.most.total}</li>
        <li>Rater {props.stats.least.rater} has the least responses of all: {props.stats.least.total}</li>
    </div>
  )
}

export default Stats;
