import uuid from 'uuid';

// ADD_LADDER
export const addLadder = (
  {
    ladderName = '',
    description = '',
    problems = [],
    createdAt = 0,
  } = {}
)=>({
  type: 'ADD_LADDER',
  ladder: {
    id: uuid(),
    ladderName,
    description,
    problems,
    createdAt,
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

// ADD_PROBLEM
export const addProblem = (ladderId, {
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