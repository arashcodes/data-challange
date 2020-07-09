import React from 'react';

const Stats = (props) => {
  return(
    <div>
        <li>Rater {props.most.rater} has completed the most Task IDs of all in this time period: {props.most.total} </li>
        <li>Rater {props.least.rater} has completed the least Task IDs of all in this time period: {props.least.total} </li>
        <li>Rater {props.highest.rater} has the highest agreement rate on the total 3 and 5 label answers in this time period: {props.highest.total} </li>
    </div>
  )
}

export default Stats;
