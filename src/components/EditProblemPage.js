import React from 'react';
import ProblemForm from './ProblemForm';
import { connect } from 'react-redux';
import { editProblem } from '../actions/ladders';

class EditProblemPage extends React.Component{
  
  problemId = this.props.match.params.id;
  ladderId = this.props.match.url.split('/')[3];
  onSubmit = (problem)=> {
    this.props.editProblem(this.ladderId, this.problemId, problem);
    this.props.history.push(`/ladders/edit/${this.ladderId}`);
  };

  render(){
    return (
      <div>
        <h2>EditProblemPage</h2>
        <p>edit problem with id {this.props.match.params.id} within ladder {this.ladderId}</p>
        <ProblemForm onSubmit={this.onSubmit} {...this.props.problem} />
      </div>
    );
  };
}

const mapStateToProps = (state, props)=>{
  const problemId = props.match.params.id;
  const ladderId = props.match.url.split('/')[3];

  const problem = state.ladders.find(ladder => ladder.id === ladderId).problems.find(
    problem => problem.id === problemId
  );
  return ({ 
    problem,
    problemId,
    ladderId 
  });
};

const mapDispatchToProps = (dispatch)=>({
  editProblem: (ladderId, problemId, updates) => dispatch(editProblem({ ladderId, problemId, updates }))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProblemPage);