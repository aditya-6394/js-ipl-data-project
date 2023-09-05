const { test, expect } = require('@jest/globals');
const matchesWonPerTeam = require('../src/server/2-matches-won-per-team-per-year');

const matches = [
  {
    season: '2001',
    winner: 'Deccan Chargers',
  },
  {
    season: '2002',
    winner: 'Royal Challengers Bangalore',
  },
  {
    season: '2002',
    winner: 'Chennai Super Kings',
  },
  {
    season: '2002',
    winner: 'Chennai Super Kings',
  },
  {
    season: '2003',
    winner: 'Chennai Super Kings',
  },
  {
    season: '2003',
    winner: 'Mumbai Indians',
  },
  {
    season: '2003',
    winner: 'Kings XI Punjab',
  },
  {
    season: '2004',
    winner: 'Kolkata Knight Riders',
  },
  {
    season: '2004',
    winner: 'Kolkata Knight Riders',
  },
  {
    season: '2004',
    winner: 'Royal Challengers Bangalore',
  },
];

test('Calculates matches won per team per year', () => {
  expect(matchesWonPerTeam(matches)).toMatchObject({
    2001: {
      'Deccan Chargers': 1,
    },
    2002: {
      'Chennai Super Kings': 2,
    },
    2003: {
      'Kings XI Punjab': 1,
      'Chennai Super Kings': 1,
      'Mumbai Indians': 1,
    },
    2004: {
      'Kolkata Knight Riders': 2,
      'Royal Challengers Bangalore': 1,
    },
  });
});
