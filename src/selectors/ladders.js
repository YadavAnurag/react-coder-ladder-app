import moment from 'moment';

// get visible ladders
const getVisibleLadders = (ladders, { text, sortBy, startDate, endDate })=>{
  return ladders.filter((ladder)=>{
    //const startDateMatch = typeof startDate !== 'number' || ladder.createdAt >= startDate;
    const createdAtMoment = moment(ladder.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
    // const endDateMatch = typeof endDate !== 'number' || ladder.createdAt <= endDate;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = ladder.ladderName.toLowerCase().includes(text.toLowerCase());
    // console.log(startDateMatch, endDateMatch, textMatch);
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortBy === 'star'){
      return a.star < b.star ? 1 : -1;
    }
  });
};

export default getVisibleLadders;