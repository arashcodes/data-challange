import React from 'react';

const Stats = (props) => {
  return(
    <div>
        <li>Rater {props.stats.most.rater} has completed the most Task IDs of all: {props.stats.most.total}</li>
        <li>Rater {props.stats.least.rater} has completed the least Task IDs of all: {props.stats.least.total}</li>
    </div>
  )
}

export default Stats;
