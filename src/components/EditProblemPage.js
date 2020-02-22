import React from 'react';
import ProblemForm from './ProblemForm';

const EditProblemPage = (props)=>{
  const ladderId = props.match.url.split('/')[3];
  return (
    <div>
      <h2>EditProblemPage</h2>
      <p>edit problem with id {props.match.params.id} within ladder {ladderId}</p>
      <ProblemForm  />
    </div>
  )
};


export default EditProblemPage;