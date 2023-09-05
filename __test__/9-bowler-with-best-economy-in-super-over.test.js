const { test, expect } = require('@jest/globals');
const bestEconomySuperOver = require('../src/server/9-bowler-with-best-economy-in-super-over');

const deliveries = [
  {
    bowler: 'Bumrah',
    is_super_over: '1',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 2,
  },
  {
    bowler: 'Bumrah',
    is_super_over: '1',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 2,
  },
  {
    bowler: 'Bumrah',
    is_super_over: '1',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 4,
  },
  {
    bowler: 'Bumrah',
    is_super_over: '1',
    wide_runs: 1,
    noball_runs: 0,
    batsman_runs: 2,
  },
  {
    bowler: 'Bumrah',
    is_super_over: '1',
    wide_runs: 1,
    noball_runs: 0,
    batsman_runs: 6,
  },
  {
    bowler: 'Bumrah',
    is_super_over: '1',
    wide_runs: 1,
    noball_runs: 0,
    batsman_runs: 6,
  },
  {
    bowler: 'Boult',
    is_super_over: '1',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 3,
  },
  {
    bowler: 'Boult',
    is_super_over: '1',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 3,
  },
  {
    bowler: 'Boult',
    is_super_over: '1',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 3,
  },
  {
    bowler: 'Boult',
    is_super_over: '1',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 3,
  },
  {
    bowler: 'Boult',
    is_super_over: '1',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 3,
  },
  {
    bowler: 'Boult',
    is_super_over: '1',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 3,
  },
];

test('Best economy of a bowler insuper over', () => {
  expect(bestEconomySuperOver(null, deliveries)).toMatchObject({
    Boult: 18,
  });
});
