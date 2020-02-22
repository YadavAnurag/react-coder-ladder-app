import React from 'react';
import { connect } from 'react-redux';
import selectedLadder from '../selectors/ladders';
import LadderListItem from './LadderListItem';

const LadderList = (props)=>(
  <div>
    {
      props.ladders.length === 0 ? (
        <p>No ladders goes here</p>
      ) : (
        props.ladders.map(ladder=> (
          <LadderListItem key={ladder.id} {...ladder} />
        ))
      )
    }
  </div>
);

const mapStateToProps = (state)=>{
  return {
    ladders: selectedLadder(state.ladders, state.filters)
  }
};
export default connect(mapStateToProps)(LadderList);