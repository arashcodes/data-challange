import React from 'react';

const Stats = (props) => {
  return(
    <div>
        <li>Rater {props.most.rater} has completed the most Task IDs of all: {props.most.total} </li>
        <li>Rater {props.least.rater} has completed the least Task IDs of all: {props.least.total} </li>
    </div>
  )
}

export default Stats;
