import React from 'react';
import LadderListItem from './LadderListItem';
import { connect } from 'react-redux';
import ProblemList from './ProblemList';
import { Link } from 'react-router-dom';

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
          <ProblemList problems={props.ladder.problems} match={props.match} history={props.history} />
        </div>
      )
    }
  </div>
);

const mapStateToProps = (state, props)=>({
  ladder: state.ladders.find(({ id })=> (id === props.match.params.id))
});
export default connect(mapStateToProps)(LadderPage);

// {
//   id: uuid(),
//   ladderName: 'first ladder',
//   description: 'this is first ladder',
//   createdAt: moment(0),
//   problems: [...problems1],
//   star: 6
// },


