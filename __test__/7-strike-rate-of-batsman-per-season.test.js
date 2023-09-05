const { test, expect } = require('@jest/globals');
const strikeRateOfBatsmanPerSeason = require('../src/server/7-strike-rate-of-batsman-per-season');

const matches = [
  { id: 1, season: 2012 },
  { id: 2, season: 2013 },
  { id: 3, season: 2014 },
  { id: 4, season: 2015 },
  { id: 5, season: 2016 },
];
const deliveries = [
  {
    match_id: 1,
    batsman: 'Virat Kohli',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 4,
  },
  {
    match_id: 1,
    batsman: 'Virat Kohli',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 2,
  },
  {
    match_id: 1,
    batsman: 'Virat Kohli',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 6,
  },
  {
    match_id: 2,
    batsman: 'Virat Kohli',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 2,
  },
  {
    match_id: 2,
    batsman: 'Virat Kohli',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 2,
  },
  {
    match_id: 3,
    batsman: 'Virat Kohli',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 1,
  },
  {
    match_id: 3,
    batsman: 'Virat Kohli',
    wide_runs: 0,
    noball_runs: 0,
    batsman_runs: 1,
  },
];

test('Strike rate of batsman per season', () => {
  expect(strikeRateOfBatsmanPerSeason(matches, deliveries)).toMatchObject({
    'Virat Kohli': {
      2012: 400,
      2013: 200,
      2014: 100,
    },
  });
});
