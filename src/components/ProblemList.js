import React from 'react';
import ProblemListItem from './ProblemListItem';


const ProblemList = (props)=>{
  return (
    <div>
      <h4>ProblemList</h4>
      {
        props.problems.length === 0 ? (
          <p>No problems</p>
        ) : (
          props.problems.map(problem=> (
            <ProblemListItem key={problem.id} {...problem} match={props.match} history={props.history} />
          ))
        )
      }
    </div>
  );
}

export default ProblemList;