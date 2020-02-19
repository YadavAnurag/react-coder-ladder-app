import React from 'react';
import ProblemListFilters from './LadderListFilters';
import LadderList from './LadderList';

const TopLadderListPage = ()=>(
  <div>
    {/* <h2>TopLadderListPage</h2> */}
    <ProblemListFilters />
    <LadderList />
  </div>
);

export default TopLadderListPage;