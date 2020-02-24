import moment from 'moment';
import uuid from 'uuid';

const problems1 = [
  {
    id: '1',
    problemName: 'first',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codechef',
    difficultyLevel: 2,
    tags: ['stack', 'tree', 'array'],
    createdAt: moment(0).add(1, 'day').valueOf(),
    star: 8
  },
  {
    id: '2',
    problemName: 'second',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 3,
    tags: ['stack', 'tree', 'array'],
    createdAt: moment().add(1, 'day').valueOf(),
    star: 3
  },
  {
    id: '3',
    problemName: 'third',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 1,
    tags: ['stack', 'tree', 'array'],
    createdAt: moment().subtract(3, 'days').valueOf(),
    star: 7
  }
];

const problems2 = [
  {
    id: '4',
    problemName: 'first2',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codechef',
    difficultyLevel: 2,
    tags: ['stack', 'tree', 'array'],
    createdAt: moment().add(1, 'year').valueOf(),
    star: 2
  },
  {
    id: '5',
    problemName: 'second2',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 3,
    tags: ['stack', 'tree', 'array'],
    createdAt: moment().add(1, 'year').valueOf(),
    star: 4
  },
  {
    id: '6',
    problemName: 'third2',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 1,
    tags: ['stack', 'tree', 'array'],
    createdAt: moment().subtract(4, 'year').valueOf(),
    star: 0
  }
];

export const problems = [
  {
    id: '7',
    problemName: 'first',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codechef',
    difficultyLevel: 2,
    tags: ['stack', 'tree', 'array'],
    createdAt: moment().valueOf(),
    star: 5
  },
  {
    id: '9',
    problemName: 'second',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 3,
    tags: ['stack', 'tree', 'array'],
    createdAt: moment(0).add(1, 'day').valueOf(),
    star: 7
  },
  {
    id: '10',
    problemName: 'third',
    problemUrl: 'http://codeforces.com/problemset/problem/263/A',
    judge: 'codeforces',
    difficultyLevel: 1,
    tags: ['stack', 'tree', 'array'],
    createdAt: moment(0).subtract(3, 'days').valueOf(),
    star: 3
  }
];

export const ladders = [
  {
    id: '11',
    ladderName: 'first ladder',
    description: 'this is first ladder',
    createdAt: moment().valueOf(),
    problems: [...problems1],
    star: 6
  },
  {
    id: '12',
    ladderName: 'my second ladder',
    description: 'this is description about the second ladder',
    createdAt: moment().add(2, 'day').valueOf(),
    problems: [...problems2 ],
    star: 3
  }
];


const altProblem = [{
  id: '13',
  problemName: '',
  problemUrl: '',
  judge: '',
  difficultyLevel: 0,
  tags: [],
  createdAt: undefined,
  star: 7
}];
export const altLadders = [
  {
    id: '14',
    ladderName: '',
    description: '',
    createdAt: undefined,
    problems: [...problems1],
    star: 8
  }
];