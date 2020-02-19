import React from 'react';
import { connect } from 'react-redux';
import { 
  setTextFilter, 
  addProblemTagFilter, 
  removeProblemTagFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByProblemDifficultyLevel,
  sortByStar
} from '../actions/filters';
import { DateRangePicker } from 'react-dates'; 

class LadderListFilters extends React.Component {

  state = {
    calanderFocused: null
  }

  onTextFilterChange = (e)=>{
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e)=>{
    const value = e.target.value;
    if(value === 'star'){
      this.props.sortByStar()
    }else if(value === 'date'){
      this.props.sortByDate()
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
        {/* <h3>LadderListFilters</h3> */}
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={this.onTextFilterChange}
          placeholder="Filter" 
        />
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
        </select>
      </div>
    );
  }
};

const mapStateToProps = (state)=>({
  filters: state.filters
});
const mapDispatchToPorps = (dispatch)=>({
  setTextFilter: (text)=> dispatch(setTextFilter({ text })),
  setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
  setEndDate: (endDate)=> dispatch(setEndDate(endDate)),
  sortByDate: ()=> dispatch(sortByDate()),
  sortByStar: ()=> dispatch(sortByStar()),
});
export default connect(mapStateToProps, mapDispatchToPorps)(LadderListFilters);
