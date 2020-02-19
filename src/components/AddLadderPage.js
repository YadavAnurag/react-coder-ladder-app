import React from 'react';
import { addLadder } from '../actions/ladders';
import { connect } from 'react-redux';
import LadderForm from './LadderForm';

class AddLadderPage extends React.Component{

  onSubmit = (ladder)=>{
    this.props.addLadder(ladder);
    this.props.history.push('/ladders');
  }

  render(){
    return (
      <div>
        <h2>AddLadderPage</h2>
        <LadderForm onSubmit={this.onSubmit} />
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch)=>({
  addLadder: (ladder)=> dispatch(addLadder(ladder))
})
export default connect(undefined, mapDispatchToProps)(AddLadderPage);