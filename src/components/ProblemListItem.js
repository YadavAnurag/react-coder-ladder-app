import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProblem } from '../actions/ladders';


// const ProblemListItem = ({ id, problemName, problemUrl, judge, difficultyLevel, tags, createdAt, star })=>
class ProblemListItem extends React.Component{

  ladderId = this.props.match.params.id;
  problemId = this.props.id;

  onDelete = ()=>{
    this.props.onProblemDelete(this.ladderId, this.problemId);
  }; 

  render(){
    return (
      <div>
        <h4>ProblemListItem</h4>
        <a href={this.props.problemUrl} target="_blank" >{this.props.problemName}</a>
        <Link to={`/ladders/edit/${this.ladderId}/problem/edit/${this.problemId}`}>Edit</Link>
        <button onClick={this.onDelete}>Delete</button>
        <p>{this.props.judge}-{this.props.difficultyLevel}</p>
        <p>{this.props.createdAt.format('MMM Do, YYYY')}-{this.props.star}-{this.props.tags.join(', ')}</p>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch)=>({
  onProblemDelete: (ladderId, problemId)=> dispatch(removeProblem({ ladderId, problemId }))
});
export default connect(undefined, mapDispatchToProps)(ProblemListItem);

// id: uuid(),
//     problemName: 'third2',
//     problemUrl: 'http://codeforces.com/problemset/problem/263/A',
//     judge: 'codeforces',
//     difficultyLevel: 1,
//     tags: {string: true , array: true},
//     createdAt: moment(0).subtract(4, 'year'),
//     star: 0