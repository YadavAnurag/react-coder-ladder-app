import React from 'react';
import { connect } from 'react-redux';
import getSelectedProblems from '../selectors/problems';
import LadderListItem from './LadderListItem';
import { Link } from 'react-router-dom';
import ProblemList from './ProblemList';
import ProblemListFilters from '../components/ProblemListFilters';

const LadderPage = (props)=>(
  <div>
    <h3>LadderPage {props.match.params.id}</h3>
    {
      (props.ladder === undefined) ? (
        <p>No ladders refresh go to home page</p>
      ) : (
        <div>
          <LadderListItem {...props.ladder} match={props.match} history={props.history} />
          <Link to={`${props.ladder.id}/problem/create`}>Add Problems</Link>
          <ProblemListFilters />
          <ProblemList problems={props.problems} match={props.match} history={props.history} />
        </div>
      )
    }
  </div>
);

const mapStateToProps = (state, props)=>{
  const ladder = state.ladders.find(({ id })=> (id === props.match.params.id));
  return {
    ladder,
    problems: getSelectedProblems(ladder.problems, state.filters)
  }
};
export default connect(mapStateToProps)(LadderPage);

// {
//   id: uuid(),
//   ladderName: 'first ladder',
//   description: 'this is first ladder',
//   createdAt: moment(0),
//   problems: [...problems1],
//   star: 6
// },


