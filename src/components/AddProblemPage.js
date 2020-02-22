import React from 'react';
import ProblemForm from './ProblemForm';
import { connect } from 'react-redux';
import { addProblem } from '../actions/ladders';

class AddProblemPage extends React.Component{

  onSubmit = (problem)=>{
    console.log(problem);
    const ladderId = this.props.match.params.id;
    this.props.addProblem(ladderId, problem);
    this.props.history.push(`/ladders/${ladderId}`);
  };

  render(){
    return (
      <div>
        <h2>AddProblemPage </h2>
        <p>Add Problem within ladder {this.props.match.params.id}</p>
        <ProblemForm onSubmit={this.onSubmit} />
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch)=>({
  addProblem: (ladderId, problem) => dispatch(addProblem(ladderId, problem))
});
export default connect(undefined, mapDispatchToProps)(AddProblemPage);