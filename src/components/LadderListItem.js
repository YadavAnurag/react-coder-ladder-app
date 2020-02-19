import React from 'react';
import { Link } from 'react-router-dom';

const LadderListItem = ({ id, ladderName, description, createdAt, problems, star })=>{

  return (
    <div>
      <Link to={`/ladders/${id}`}>
        <h3>{ladderName}- {star}</h3>
      </Link>
      <Link to={`/ladders/edit/${id}`}>Edit</Link>
      <p>{description}</p>
      <p>{problems.length}-{createdAt.format('MMM Do YYYY')}</p>
    </div>
  )
};

export default LadderListItem;

