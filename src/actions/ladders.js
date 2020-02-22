import uuid from 'uuid';
import moment from 'moment';

// ADD_LADDER
export const addLadder = (
  {
    ladderName = '',
    description = '',
    problems = [],
    createdAt = moment(),
    star = 0
  } = {}
)=>({
  type: 'ADD_LADDER',
  ladder: {
    id: uuid(),
    ladderName,
    description,
    problems,
    createdAt,
    star
  }
});
// todo delete fake add ladder
export const addFakeLadder = (
  {
    id = '',
    ladderName = '',
    description = '',
    problems = [],
    createdAt = moment(),
    star = 0
  } = {}
)=>({
  type: 'ADD_LADDER',
  ladder: {
    id,
    ladderName,
    description,
    problems,
    createdAt,
    star
  }
});

// REMOVE_LADDER
export const removeLadder = (
  { id = '' }  = {}
)=>({
  type: 'REMOVE_LADDER',
  id
});

// EDIT_LADDER
export const editLadder = (id, updates)=>({
  type: 'EDIT_LADDER',
  id,
  updates
});


// INCREASE_LADDER_STAR
export const increaseLadderStar = (
  {
    ladderId = ''
  } = {}
)=>({
  type: 'INCREASE_LADDER_STAR',
  ladderId
});

// DECREASE_LADDER_STAR
export const decreaseLadderStar = (
  {
    ladderId = ''
  } = {}
)=>({
  type: 'DECREASE_LADDER_STAR',
  ladderId
});

// ADD_PROBLEM
export const addProblem = (ladderId, {
  problemName = '',
  problemUrl = '',
  judge = '',
  difficultyLevel = 0,
  tags = [],
  createdAt = moment(),
  star = 0
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
    createdAt,
    star
  }
});

// todo delete add fake problem
export const addFakeProblem = (ladderId, {
  id = '',
  problemName = '',
  problemUrl = '',
  judge = '',
  difficultyLevel = 0,
  tags = [],
  createdAt = moment(),
  star = 0
})=>({
  type: 'ADD_PROBLEM',
  ladderId,
  problem: {
    id,
    problemName,
    problemUrl,
    judge,
    difficultyLevel,
    tags,
    createdAt,
    star
  }
});

// REMOVE_PROBLEM
export const removeProblem = (
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
export const editProblem = (
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


// INCREASE_PROBLEM_STAR
export const increaseProblemStar = (
  {
    ladderId = '',
    problemId = ''
  } = {}
)=>({
  type: 'INCREASE_PROBLEM_STAR',
  ladderId,
  problemId
});

// DECREASE_PROBLEM_STAR
export const decreaseProblemStar = (
  {
    ladderId = '',
    problemId = ''
  } = {}
)=>({
  type: 'DECREASE_PROBLEM_STAR',
  ladderId,
  problemId
});