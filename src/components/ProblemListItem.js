import React from 'react';
import { Link } from 'react-router-dom';

const ProblemListItem = ({ id, problemName, problemUrl, judge, difficultyLevel, tags, createdAt, star })=>(
  <div>
    <h4>ProblemListItem</h4>
    <p>{problemName}-{problemUrl}</p>
    <p>{judge}-{difficultyLevel}</p>
    <p>{createdAt.format('MMM Do, YYYY')}-{star}-{Object.keys(tags).join(', ')}</p>
  </div>
);

export default ProblemListItem;

// id: uuid(),
//     problemName: 'third2',
//     problemUrl: 'http://codeforces.com/problemset/problem/263/A',
//     judge: 'codeforces',
//     difficultyLevel: 1,
//     tags: {string: true , array: true},
//     createdAt: moment(0).subtract(4, 'year'),
//     star: 0