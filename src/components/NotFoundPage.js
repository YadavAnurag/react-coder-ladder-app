import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = ()=> (
  <div>
    <h2>आप गलत निकल लिए है!...404</h2>
    <Link to="/">Go to Home..</Link>
  </div>
);

export default NotFoundPage;