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
    createdAt: moment(0),
    star: 8
  },
  {
    id: uuid(),
    problemName: 'second',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 3,
    tags: {stack: true , tree: true, array: true},
    createdAt: moment(0).add(1, 'day'),
    star: 3
  },
  {
    id: uuid(),
    problemName: 'third',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 1,
    tags: {string: true , array: true},
    createdAt: moment(0).subtract(3, 'days'),
    star: 7
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
    createdAt: moment(0).add(1, 'year'),
    star: 2
  },
  {
    id: uuid(),
    problemName: 'second2',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 3,
    tags: {stack: true , tree: true, array: true},
    createdAt: moment(0).add(2, 'year'),
    star: 4
  },
  {
    id: uuid(),
    problemName: 'third2',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 1,
    tags: {string: true , array: true},
    createdAt: moment(0).subtract(4, 'year'),
    star: 0
  }
];

export const problems = [
  {
    id: uuid(),
    problemName: 'first',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codechef',
    difficultyLevel: 2,
    tags: {stack: true, string: true},
    createdAt: moment(0),
    star: 5
  },
  {
    id: uuid(),
    problemName: 'second',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 3,
    tags: {stack: true , tree: true, array: true},
    createdAt: moment(0).add(1, 'day'),
    star: 7
  },
  {
    id: uuid(),
    problemName: 'third',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 1,
    tags: {string: true , array: true},
    createdAt: moment(0).subtract(3, 'days'),
    star: 3
  }
];

export const ladders = [
  {
    id: uuid(),
    ladderName: 'first ladder',
    description: 'this is first ladder',
    createdAt: moment(0),
    problems: [...problems1],
    star: 6
  },
  {
    id: uuid(),
    ladderName: 'my second ladder',
    description: 'this is description about the second ladder',
    createdAt: moment(0).add(1, 'minute'),
    problems: [...problems2 ],
    star: 3
  }
];


const altProblem = [{
  id: uuid(),
  problemName: '',
  problemUrl: '',
  judge: '',
  difficultyLevel: 0,
  tags: {},
  createdAt: undefined,
  star: 7
}];
export const altLadders = [
  {
    id: uuid(),
    ladderName: '',
    description: '',
    createdAt: undefined,
    problems: [...problems1],
    star: 8
  }
];