import React from 'react';

/**
 * Stats is a stateless child component to App and presents data received from App.
 */
const Stats = (props) => {
  return(
    <div>
        <li>Rater {props.most.rater} has completed the most Task IDs of all in this time period: {props.most.total} responses to each of 3-label and 5-label types</li>
        <br />
        <li>Rater {props.least.rater} has completed the least Task IDs of all in this time period: {props.least.total} responses to each of 3-label and 5-label types </li>
        <br />
        <li>Rater {props.highest.rater} has the overall highest agreement rate of both the  3 and 5 label answers in this time period: {props.highest.total}% </li>
        <br />
        <li>Rater {props.lowest.rater} has the overall lowest agreement rate of both the  3 and 5 label answers in this time period: {props.lowest.total}% </li>
    </div>
  )
}

export default Stats;
