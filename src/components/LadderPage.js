import React from 'react';
import LadderListItem from './LadderListItem';
import { connect } from 'react-redux';
import ProblemList from './ProblemList';

const LadderPage = (props)=>(
  <div>
    <h3>LadderPage {props.match.params.id}</h3>
    <LadderListItem {...props.ladder} />
    {console.log(props.ladder.problems)}
    <ProblemList problems={props.ladder.problems} />
    {/* {
      (props.ladder === undefined) ? (
        <p>Emtpry ProblemList</p>
      ) : (
        
      )
    } */}
  </div>
);

const mapStateToProps = (state, props)=>{
  // console.log(state.ladders.find((ladder)=> {
  //   console.log(ladder, ladder.id === props.match.params.id);
  //   return (ladder.id === props.match.params.id)
  // }));
  return ({
    ladder: state.ladders.find(({ id })=> (id === props.match.params.id))
  })
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


