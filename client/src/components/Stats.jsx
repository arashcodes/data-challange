import React from 'react';

const Stats = (props) => {
  return(
    <div>
        <li>Rater {props.most.rater} has completed the most Task IDs of all in this time period: {props.most.total} </li>
        <br />
        <li>Rater {props.least.rater} has completed the least Task IDs of all in this time period: {props.least.total} </li>
        <br />
        <li>Rater {props.highest.rater} has the overall highest agreement rate of both the  3 and 5 label answers in this time period: {props.highest.total}% </li>
        <br />
        <li>Rater {props.lowest.rater} has the overall lowest agreement rate of both the  3 and 5 label answers in this time period: {props.lowest.total}% </li>
    </div>
  )
}

export default Stats;
