import React from 'react';

const Stats = (props) => {
  return(
    <div>
        <li>Rater {props.most.rater} has most responses  {props.most.total}</li>
    </div>
  )
}

export default Stats;
