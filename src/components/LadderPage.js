import React from 'react';

const LadderPage = (props)=>(
  <div>
    <h2>LadderPage {props.match.params.id}</h2>
  </div>
);

export default LadderPage;