import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { connect } from 'react-redux';

class ProblemForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      problemName: this.props.problemName ? this.props.problemName : '',
      problemUrl: this.props.problemUrl ? this.props.problemUrl : '',
      judge: this.props.judge ? this.props.judge : '',
      difficultyLevel: this.props.difficultyLevel ? this.props.difficultyLevel : 2,
      tags: this.props.tags ? this.props.tags.join(', ') : '',
      error: ''
    };
  };

  onProblemNameChange = (e)=>{
    this.setState({ problemName: e.target.value });
  };

  predictJudge = (url)=>{
    if(url.slice(0,3) == 'htt'){
      let judge = url.split('//')[1].split('.')[0];
      if(judge.slice(0, 3) === 'www'){
        judge = url.split('www.')[1].split('.')[0];
      }
      this.setState({ judge });
    }else if(url.slice(0, 3) === 'www'){
      const judge = url.split('www.')[1].split('.')[0];
    }
  };

  onProblemUrlChange = (e)=>{
    const url = e.target.value;
    this.setState({ problemUrl: url });
  };

  onJudgeInputFocus = ()=>{
    try {
      if(this.state.problemUrl !== ''){
        this.predictJudge(this.state.problemUrl);
      }else if(this.state.judge === ''){
        this.setState({ judge: '' });
      }
    } catch (error) {}
  };

  onJudgeChange = (e)=>{
    this.setState({ judge: e.target.value });
  };

  onDifficultyChange = (e)=>{
    this.setState({ difficultyLevel: parseInt(e.target.value) });
  };

  onTagChange = (e)=>{
    this.setState({ tags: e.target.value });
  };

  onSubmit = (e)=>{
    e.preventDefault();
    if( !this.state.problemName || !this.state.problemUrl ||
      !this.state.judge || !this.state.tags){
      this.setState({ error: 'Please enter problem name, url, judge and tags'});
    }else{
      this.setState({ error: '' });
      
      const updatedTags = [];
      this.state.tags.split(',').map(tag => {
        if(tag.trim()){ updatedTags.push(tag.trim()) };
      });

      const createdAt = this.props.createdAt ? this.props.createdAt : moment();

      this.props.onSubmit({
        problemName: this.state.problemName,
        problemUrl: this.state.problemUrl,
        judge: this.state.judge,
        difficultyLevel: this.state.difficultyLevel,
        tags: updatedTags,
        createdAt,
        star: 0
      });
    }
  };

  render(){
    return (
      <div>
        <h3>ProblemForm</h3>
        <form onSubmit={this.onSubmit}>
          <div>{this.state.error && <p>{this.state.error}</p>}</div>
          <input 
            type='text'
            placeholder='Problem Name'
            value={this.state.problemName}
            onChange={this.onProblemNameChange}
            autoFocus
          />
          <input 
            type='text'
            placeholder='Problem URL'
            value={this.state.problemUrl}
            onChange={this.onProblemUrlChange}
          />
          <input 
            type="text"
            placeholder='Judge'
            value={this.state.judge}
            onChange={this.onJudgeChange}
            onFocus={this.onJudgeInputFocus}
          />
          <select value={this.state.difficultyLevel} onChange={this.onDifficultyChange}>
            {
              [1, 2, 3, 4, 5].map((value, index)=> (
                <option key={index} value={value.toString()} >{value}</option>
              ))
            }
          </select>
          <input 
            type="text"
            placeholder='Tags with comma'
            value={this.state.tags}
            onChange={this.onTagChange}
          />
          <button>Add Problem</button>
        </form>
      </div>
    );
  };
}

export default ProblemForm;

// id: '2',
//     problemName: 'second',
//     problemUrl: 'http://codeforces.com/problemset/problem/263/A',
//     judge: 'codeforces',
//     difficultyLevel: 3,
//     tags: {stack: true , tree: true, array: true},
//     createdAt: moment(0).add(1, 'day'),
//     star: 3