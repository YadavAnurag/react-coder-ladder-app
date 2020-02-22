import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeLadder } from '../actions/ladders';

class LadderListItem extends React.Component{

  onDelete = (id)=>{
    this.props.onLadderDelete(id);
    if(this.props.match && this.props.history){
      this.props.history.push('/ladders');
    }
  }

  render(){
    return (
      <div>
        <Link to={`/ladders/${this.props.id}`}>
          <h3>{this.props.ladderName}- {this.props.star}</h3>
        </Link>
        <Link to={`/ladders/edit/${this.props.id}`}>Edit Ladder</Link>
        <button onClick={()=> this.onDelete(this.props.id)}>Delete</button>
        <p>{this.props.description}</p>
        <p>{this.props.problems.length}-{this.props.createdAt.format('MMM Do YYYY')}</p>
      </div>
    )
  }
};

const mapDispathToProps = (dispatch)=>({
  onLadderDelete: (id)=> dispatch(removeLadder({ id }))
});
export default connect(undefined, mapDispathToProps)(LadderListItem);

