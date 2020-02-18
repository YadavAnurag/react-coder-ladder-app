import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { ladders, altLadders, problems } from '../fixtures/ladders';
import { filters, altFilters } from '../fixtures/filters';
console.log(ladders, altLadders, filters, altFilters); 

// const ladders = [{
//   id: '05b1',
//   ladderName: 'my best ladder',
//   description: 'this is description about the ladder',
//   createdAt: 1000,
//   problems: [
//     {
//       id: '34c3',
//       problemName: 'beautiful Matrix',
//       problemUrl: 'http://codeforces.com/problemset/problem/263/A',
//       judge: 'Hackerrank',
//       difficultyLevel: 0,
//       tags: {stack: true , tree: true, string: true},
//       createdAt: -100
//     }
//   ]
// }];
// const filters = {
//   text: 'matrix',
//   sortBy: '',
//   startDate: '',
//   endDate: ''
// }
// ADD_LADDER
const addLadder = (
  {
    ladderName = '',
    description = '',
    problems = [],
    createdAt = 0
  } = {}
)=>({
  type: 'ADD_LADDER',
  ladder: {
    id: uuid(),
    ladderName,
    description,
    problems,
    createdAt
  }
});

// REMOVE_LADDER
const removeLadder = (
  { id = '' }  = {}
)=>({
  type: 'REMOVE_LADDER',
  id
});
// EDIT_LADDER
const editLadder = (id, updates)=>({
  type: 'EDIT_LADDER',
  id,
  updates
});

// ADD_PROBLEM
const addProblem = (ladderId, {
  problemName = '',
  problemUrl = '',
  judge = '',
  difficultyLevel = 0,
  tags = [],
  createdAt = 0
})=>({
  type: 'ADD_PROBLEM',
  ladderId,
  problem: {
    id: uuid(),
    problemName,
    problemUrl,
    judge,
    difficultyLevel,
    tags,
    createdAt
  }
});

// REMOVE_PROBLEM
const removeProblem = (
  { 
    ladderId = '',
    problemId = ''
  } = {}
)=>({
  type: 'REMOVE_PROBLEM',
  ladderId,
  problemId
});
// EDIT_PROBLEM
const editProblem = (
  {
    ladderId = '',
    problemId = '',
    updates = {}
  } = {}
)=>({
  type: 'EDIT_PROBLEM',
  ladderId,
  problemId,
  updates
});


// SET_TEXT_FILTER
const setTextFilter = (
  { text = '' } = {}
)=>({
  type: 'SET_TEXT_FILTER',
  text
});
// SET_JUDGE_TEXT_FILTER
const setJudgeTextFilter = (
  { judge = '' } = {}
)=>({
  type: 'SET_JUDGE_TEXT_FILTER',
  judge
});
// setProblemTagFilter
const addProblemTagFilter = (
  { tag = '' } = {}
)=>({
  type: 'ADD_PROBLEM_TAG_FILTER',
  tag
});

// REMOVE_PROBLEM_TAG_FILTER
const removeProblemTagFilter = (
  { tag = '' } = {}
)=>({
  type: 'REMOVE_PROBLEM_TAG_FILTER',
  tag
});

// SET_START_DATE
const setStartDate = (
  { startDate = 0 } = {}
)=>({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_DATE
const setEndDate = (
  { endDate = 0 } = {}
)=>({
  type: 'SET_END_DATE',
  endDate
});
// SORT_BY_DATE
const sortByDate = ()=>({
  type: 'SORT_BY_DATE'
});

// SORT_BY_PROBLEM_DIFFICULTY_LEVEL
const sortByProblemDifficultyLevel = ()=>({
  type: 'SORT_BY_PROBLEM_DIFFICULTY_LEVEL'
});


const ladderReducerDefaultState = [];
const ladderReducer = (state = ladderReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_LADDER':
      return [...state, action.ladder];
    case 'REMOVE_LADDER':
      return state.filter(({ id })=>(id !== action.id));
    case 'EDIT_LADDER':
      return state.map((ladder)=>{
        if(ladder.id === action.id){
          return { ...ladder, ...action.updates };
        }else{
          return ladder;
        }
      });
    case 'ADD_PROBLEM':
      return state.map((ladder)=>{
        if(ladder.id === action.ladderId){
          const problems = ladder.problems.concat(action.problem);
          return {...ladder, problems: problems};
        }else{
          return ladder;
        }
      });
    case 'REMOVE_PROBLEM':
      return state.map((ladder)=>{
        if(ladder.id === action.ladderId){
          const problems = ladder.problems.filter(({ id })=>( id !== action.problemId));
          return {...ladder, problems: problems}
        }else{
          return ladder;
        }
      });
    case 'EDIT_PROBLEM':
      return state.map((ladder)=>{
        if(ladder.id === action.ladderId){
          const updatedProblems = ladder.problems.map((problem)=>{
            if(problem.id === action.problemId){
              return {...problem, ...action.updates};
            }else{
              return problem;
            }
          });
          return {...ladder, problems: updatedProblems};
        }else{
          return ladder;
        }
      });
    default: 
      return state;
  }
};
// filter reducer
const filterRecuerDefaultState = {
  text: '',
  judge: '',
  tags: {},
  sortBy: '',
  startDate: '',
  endDate: ''
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
    default: 
      return state;
  }
};

// get visible ladders
const getVisibleLadders = (ladders, { text, sortBy, startDate, endDate })=>{
  return ladders.filter((ladder)=>{
    const startDateMatch = typeof startDate !== 'number' || ladder.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || ladder.createdAt <= endDate;
    const textMatch = ladder.ladderName.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};


// get visible problems
const getVisibleProblems = (problems, { text, judge, tags, sortBy, startDate, endDate })=>{
  return problems.filter((problem)=>{
    const startDateMatch = typeof startDate !== 'number' || problem.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || problem.createdAt <= endDate;
    const textMatch = problem.problemName.toLowerCase().includes(text.toLowerCase());
    const judgeMatch = problem.judge.toLowerCase().includes(judge.toLowerCase());
    
    let problemTagMatch = true;
    const problemTags = Object.keys(problem.tags);
    const filterTags = Object.keys(tags);
    if(filterTags.length !== 0){
      problemTagMatch = filterTags.some(filterTag => problemTags.includes(filterTag));
    }
    return startDateMatch && endDateMatch && textMatch && judgeMatch && problemTagMatch;
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }if(sortBy === 'problemDifficultyLevel'){
      return a.difficultyLevel > b.difficultyLevel ? 1 : -1;
    }
  });
};
const newFilters = {text: '', judge: '', tags: {stack: true, tree: true, queue: true}, sortBy: 'date', startDate: undefined, endDate: undefined};
//const newFilters = filters;
const newProblems = problems;
const result = getVisibleProblems(newProblems, newFilters);
console.log('result', result);



// store creation
const store = createStore(
  combineReducers({
    ladders: ladderReducer,
    filters: filterReducer
  })
);

const unsubscribe = store.subscribe(()=>{
  // console.log(store.getState());
  const state = store.getState();
  const visibleLadders = getVisibleLadders(state.ladders, state.filters);
  console.log(visibleLadders, state.filters);
});
const firstLadder = store.dispatch(addLadder({ ladderName: 'first ladder', description: 'some description', createdAt: 2000 }));
const secondLadder = store.dispatch(addLadder({ ladderName: 'my ladder', createdAt: 1000 }));
store.dispatch(addProblem(secondLadder.ladder.id, {problemName: 'first', tags: ['array', 'queue', 'graph']}));
const secondUpdatedLadder = store.dispatch(addProblem(secondLadder.ladder.id, {problemName: 'second', tags: ['stack', 'tree']}));
store.dispatch(removeProblem({ladderId: secondUpdatedLadder.ladderId, problemId: secondUpdatedLadder.problem.id}));
const args = {ladderId: secondUpdatedLadder.ladderId, problemId: secondUpdatedLadder.problem.id, updates: {problemName: 'new name'}};
store.dispatch(editProblem(args));
store.dispatch(setTextFilter({ text: 'ladder' }));
store.dispatch(setJudgeTextFilter({ judge: 'hackerrank' }));
store.dispatch(setStartDate({ startDate: 1000}));
store.dispatch(setEndDate({ endDate: -1000}));
store.dispatch(addProblemTagFilter({ tag: 'stack'}));
store.dispatch(addProblemTagFilter({ tag: 'stack'}));
store.dispatch(addProblemTagFilter({ tag: 'array'}));
store.dispatch(removeProblemTagFilter({ tag: 'stack'}));
store.dispatch(removeProblemTagFilter({ tag: 'array'}));
store.dispatch(sortByDate());
store.dispatch(sortByProblemDifficultyLevel());


// const arr = [1,2,3];
// const foo = arr.some((a)=>a===4);
// console.log(foo);