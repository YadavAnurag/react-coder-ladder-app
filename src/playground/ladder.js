import moment from 'moment';
import uuid from 'uuid';

const problems1 = [
  {
    id: uuid(),
    problemName: 'first',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codechef',
    difficultyLevel: 2,
    tags: {stack: true, string: true},
    createdAt: -100
  },
  {
    id: uuid(),
    problemName: 'second',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 3,
    tags: {stack: true , tree: true, array: true},
    createdAt: -100
  },
  {
    id: uuid(),
    problemName: 'third',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 1,
    tags: {string: true , array: true},
    createdAt: -100
  }
];

const problems2 = [
  {
    id: uuid(),
    problemName: 'first2',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codechef',
    difficultyLevel: 2,
    tags: {stack: true, string: true},
    createdAt: -100
  },
  {
    id: uuid(),
    problemName: 'second2',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 3,
    tags: {stack: true , tree: true, array: true},
    createdAt: -100
  },
  {
    id: uuid(),
    problemName: 'third2',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 1,
    tags: {string: true , array: true},
    createdAt: -100
  }
];

export const ladders = [
  {
    id: uuid(),
    ladderName: 'first ladder',
    description: 'this is first ladder',
    createdAt: 1000,
    problems: [...problems1]
  },
  {
    id: uuid(),
    ladderName: 'my second ladder',
    description: 'this is description about the second ladder',
    createdAt: 2000,
    problems: [...problems2 ]
  }
];

export const altLadders = [
  {
    id: 'l1',
    ladderName: 'first ladder',
    description: 'this is first ladder',
    createdAt: 1000,
    problems: [...problems1]
  }
];


const filters = {
  text: '',
  judge: '',
  tags: {},
  sortBy: '',
  startDate: '',
  endDate: ''
};
const demoState = {
  ladders: ladders,
  filters,
};
console.log(demoState);