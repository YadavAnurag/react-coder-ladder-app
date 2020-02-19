import React from 'react';
import ProblemListFilters from './LadderListFilters';
import LadderList from './LadderList';

const LadderListPage = () => (
  <div>
    {/* <h2>LadderListPage</h2> */}
    <ProblemListFilters />
    <LadderList />
  </div>
);

export default LadderListPage;