import React from 'react';
import ProblemListItem from './ProblemListItem';


const ProblemList = (props)=>(
  <div>
    <h4>ProblemList</h4>
    {
      props.problems.length === 0 ? (
        <p>No problems</p>
      ) : (
        props.problems.map(problem=> (
          <ProblemListItem key={problem.id} {...problem} />
        ))
      )
    }
  </div>
);

export default ProblemList;