import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

class LadderForm extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      ladderName: props.ladder ? props.ladder.ladderName : '',
      description: props.ladder ? props.ladder.description : '',
      createdAt: props.ladder ? moment(props.ladder.createdAt) : moment(),
      problems: props.ladder ? props.ladder.problems : [],
      calanderFocused: false,
      error: ''
    };
  }

  onLadderNameChange = (e)=>{
    this.setState({ ladderName: e.target.value });
  };
  onDescriptionChange = (e)=>{
    this.setState({ description: e.target.value });
  };
  onDateChange = (createdAt)=>{
    if(createdAt){
      this.setState({ createdAt });
    }
  };
  onFocusChange = ({ focused })=>{
    this.setState({ calanderFocused: focused });
  };
  onSubmit = (e)=>{
    e.preventDefault();
    
    if(!this.state.ladderName || !this.state.description){
      this.setState({ error: 'Please enter ladder name and description'});
    }else{
      this.setState({ error: ''});
      this.props.onSubmit({
        ladderName: this.state.ladderName,
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
        problems: []
      });
    }
  }

  render(){
    return (
      <div>
        <h4>LadderForm</h4>
        <div>{this.state.error && <p>{this.state.error}</p>}</div>
        <form onSubmit={this.onSubmit} >
          <input 
            type="text"
            placeholder="Ladder name"
            value={this.state.ladderName}
            onChange={this.onLadderNameChange}
            autoFocus
          />
          <input 
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            focused={this.state.calanderFocused}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=> false}
          />
          <button>Add Ladder</button>
        </form>
      </div>
    )
  }
}

export default LadderForm;