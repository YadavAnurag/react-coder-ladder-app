import moment from 'moment';

// get visible problems
const getVisibleProblems = (problems, { text, judge, tags, sortBy, startDate, endDate })=>{
  return problems.filter((problem)=>{
    
    const createdAtMoment = moment(problem.createdAt);
  
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = problem.problemName.toLowerCase().includes(text.toLowerCase());
    const judgeMatch = problem.judge.toLowerCase().includes(judge.toLowerCase());
    
    let problemTagMatch = true;
    const problemTags = problem.tags;
    const filterTags = Object.keys(tags);

    if(filterTags.length !== 0){
      problemTagMatch = filterTags.some(filterTag => problemTags.includes(filterTag));
    }
    return startDateMatch && endDateMatch && textMatch && judgeMatch && problemTagMatch;
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortBy === 'problemDifficultyLevel'){
      return a.difficultyLevel > b.difficultyLevel ? 1 : -1;
    }
    if(sortBy === 'star'){
      return a.star < b.star ? 1 : -1;
    }
  });
};

export default getVisibleProblems;