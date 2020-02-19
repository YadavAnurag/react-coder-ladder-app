// SET_TEXT_FILTER
export const setTextFilter = (
  { text = '' } = {}
)=>({
  type: 'SET_TEXT_FILTER',
  text
});

// SET_JUDGE_TEXT_FILTER
export const setJudgeTextFilter = (
  { judge = '' } = {}
)=>({
  type: 'SET_JUDGE_TEXT_FILTER',
  judge
});

// setProblemTagFilter
export const addProblemTagFilter = (
  { tag = '' } = {}
)=>({
  type: 'ADD_PROBLEM_TAG_FILTER',
  tag
});

// REMOVE_PROBLEM_TAG_FILTER
export const removeProblemTagFilter = (
  { tag = '' } = {}
)=>({
  type: 'REMOVE_PROBLEM_TAG_FILTER',
  tag
});

// SET_START_DATE
export const setStartDate = (startDate)=>({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate)=>({
  type: 'SET_END_DATE',
  endDate
});

// SORT_BY_DATE
export const sortByDate = ()=>({
  type: 'SORT_BY_DATE'
});

// SORT_BY_PROBLEM_DIFFICULTY_LEVEL
export const sortByProblemDifficultyLevel = ()=>({
  type: 'SORT_BY_PROBLEM_DIFFICULTY_LEVEL'
});

// SORT_BY_STARS
export const sortByStar = ()=>({
  type: 'SORT_BY_STAR'
});

