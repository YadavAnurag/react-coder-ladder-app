
// ladder reducer
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

export default ladderReducer;