import moment from "moment";

// filter reducer
const filterRecuerDefaultState = {
  text: '',
  judge: '',
  tags: {},
  sortBy: 'star',
  startDate: null,
  endDate: null
};
const filterReducer = (state = filterRecuerDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SET_JUDGE_TEXT_FILTER':
      return {...state, judge: action.judge};
    case 'ADD_PROBLEM_TAG_FILTER':
      const tags = {...state.tags};
      tags[action.tag] = true;
      return {...state, tags};
    case 'REMOVE_PROBLEM_TAG_FILTER':
      const oldTags = {...state.tags};
      delete oldTags[action.tag];
      return {...state, tags: oldTags};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'};
    case 'SORT_BY_PROBLEM_DIFFICULTY_LEVEL':
      return {...state, sortBy: 'problemDifficultyLevel'};
    case 'SORT_BY_STAR':
      return {...state, sortBy: 'star'};
    default: 
      return state;
  }
};

export default filterReducer;