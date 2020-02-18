import React from 'react';

const AddProblemPage = (props)=>(
  <div>
    <h2>AddProblemPage </h2>
    <p>Add Problem within ladder {props.match.params.id}</p>
  </div>
);

export default AddProblemPage;