const { test, expect } = require('@jest/globals');
const tossAndGameWinner = require('../src/server/5-won-the-toss-and-match');

const matches = [
  {
    toss_winner: 'CSK',
    winner: 'CSK',
  },
  {
    toss_winner: 'MI',
    winner: 'PBKS',
  },
  {
    toss_winner: 'DC',
    winner: 'MI',
  },
  {
    toss_winner: 'RCB',
    winner: 'RCB',
  },
];

test('Calculates the team who is toss as well as match winner', () => {
  expect(tossAndGameWinner(matches)).toMatchObject({
    CSK: 1,
    RCB: 1,
  });
});
