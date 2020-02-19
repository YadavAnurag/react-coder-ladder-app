import React from 'react';
import { connect } from 'react-redux';
import { 
  setTextFilter, 
  setJudgeTextFilter, 
  addProblemTagFilter, 
  removeProblemTagFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByProblemDifficultyLevel,
  sortByStar
} from '../actions/filters';
import { DateRangePicker } from 'react-dates'; 

class ProblemListFilters extends React.Component {

  state = {
    tag: '',
    calanderFocused: null
  }

  onTextFilterChange = (e)=>{
    this.props.setTextFilter(e.target.value);
  };
  onJudgeTextFilterChange = (e)=>{
    this.props.setJudgeTextFilter(e.target.value);
  };
  onProblemTagTextFilterChange = (e)=>{
    this.setState({
      tag: e.target.value
    });
  };
  addProblemTag = (e)=>{
    if(e.target.value){
      this.props.addProblemTagFilter(e.target.value);
      this.setState({ tag: '' });
    }
  };
  removeProblemTag = (e)=>{
    this.props.removeProblemTagFilter(e.target.value);
  };
  onSortChange = (e)=>{
    const value = e.target.value;
    if(value === 'star'){
      this.props.sortByStar()
    }else if(value === 'date'){
      this.props.sortByDate()
    }else if(value === 'problemDifficultyLevel'){
      this.props.sortByProblemDifficultyLevel()
    }
  };
  onDatesChange = ({ startDate, endDate })=>{
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calanderFocused)=>{
    this.setState({ calanderFocused });
  };
  

  render(){
    return (
      <div>
        {/* <h3>ProblemListFilters</h3> */}
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={this.onTextFilterChange}
          placeholder="Filter" 
        />
        <input 
          type="text" 
          value={this.props.filters.judge} 
          onChange={this.onJudgeTextFilterChange}
          placeholder="Judge" 
        />
        <input 
          type="text" 
          value={this.state.tag} 
          onChange={this.onProblemTagTextFilterChange}
          placeholder="Problem Tag" 
        />
        <button onClick={this.addProblemTag} value={this.state.tag}>Add</button>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calanderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={()=> false}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="star">star</option>
          <option value="date">date</option>
          <option value="problemDifficultyLevel">difficulty</option>
        </select>
        <ol>
          {
            (
              Object.keys(this.props.filters.tags).map((tag)=>(
                <li key={tag}>
                  {tag} 
                  <button onClick={this.removeProblemTag} value={tag}>Remove</button>
                </li>
              ))
            )
          }
        </ol>
      </div>
    );
  }
};

const mapStateToProps = (state)=>({
  filters: state.filters
});
const mapDispatchToPorps = (dispatch)=>({
  setTextFilter: (text)=> dispatch(setTextFilter({ text })),
  setJudgeTextFilter: (judge)=> dispatch(setJudgeTextFilter({ judge })),
  addProblemTagFilter: (tag)=> dispatch(addProblemTagFilter({ tag })),
  removeProblemTagFilter: (tag)=> dispatch(removeProblemTagFilter({ tag })),
  setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
  setEndDate: (endDate)=> dispatch(setEndDate(endDate)),
  sortByDate: ()=> dispatch(sortByDate()),
  sortByStar: ()=> dispatch(sortByStar()),
  sortByProblemDifficultyLevel: ()=> dispatch(sortByProblemDifficultyLevel()),
});
export default connect(mapStateToProps, mapDispatchToPorps)(ProblemListFilters);
