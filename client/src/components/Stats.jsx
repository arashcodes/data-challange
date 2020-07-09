import React from 'react';

const Stats = (props) => {
  return(
    <div>
        <li>Rater {props.most.rater} has completed the most Task IDs of all: {props.most.total} </li>
    </div>
  )
}

export default Stats;
