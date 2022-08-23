// import _ from 'lodash';
import './styles.css';

const scorecard = [
  {
    id: 0,
    name: 'test1',
    score: '5000',
  },
  {
    id: 1,
    name: 'test2',
    score: '5000',
  },
  {
    id: 2,
    name: 'test3',
    score: '5000',
  },
  {
    id: 3,
    name: 'test4',
    score: '5000',
  },
  {
    id: 4,
    name: 'test5',
    score: '5000',
  },
];

document.getElementById('scoreList').innerHTML = scorecard.map((items) => `
<p class="eachScore">${items.name}: ${items.score}</p>`).join(' ');
