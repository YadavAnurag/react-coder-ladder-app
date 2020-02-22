import React from 'react';
import { connect } from 'react-redux';
import { editLadder, removeLadder } from '../actions/ladders';
import LadderForm from './LadderForm';
import ProblemList from './ProblemList';


class EditLadderPage extends React.Component{

  onSubmit = (updates)=>{
    this.props.editLadder(this.props.ladder.id, updates);
    this.props.history.push('/ladders');
  };
  removeLadder = ()=>{
    this.props.removeLadder(this.props.ladder.id)
    this.props.history.push('/ladders');
  };

  render(){
    return (
      <div>
        <h2>EditLadderPage</h2>
        <p>edit ladder with id{this.props.match.params.id}-{this.props.ladder.ladderName}</p>
        <LadderForm ladder={this.props.ladder} onSubmit={this.onSubmit} />
        <button onClick={this.removeLadder}>remove</button>
        <ProblemList problems={this.props.ladder.problems} match={this.props.match} history={this.props.history} />
      </div>
    )
  };
};

const mapStateToProps = (state, props)=>({
  ladder: state.ladders.find(ladder=> (ladder.id === props.match.params.id))
});
const mapDispatchToProps = (dispatch)=>({
  editLadder: (id, updates)=> dispatch(editLadder(id, updates)),
  removeLadder: (id)=> dispatch(removeLadder({ id }))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditLadderPage);