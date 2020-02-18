import React from 'react';

const EditLadderPage = (props)=>(
  <div>
    <h2>EditLadderPage</h2>
    <p>edit ladder {props.match.params.id}</p>
  </div>
);

export default EditLadderPage;