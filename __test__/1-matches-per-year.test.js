const { test, expect } = require('@jest/globals');
const matchesPerYear = require('../src/server/1-matches-per-year');

const data = [
  {
    season: '2008',
  },
  {
    season: '2008',
  },
  {
    season: '2010',
  },

  {
    season: '2010',
  },
  {
    season: '2010',
  },
  {
    season: '2011',
  },
  {
    season: '2011',
  },
];

test('Matches per year', () => {
  expect(matchesPerYear(data)).toMatchObject({
    2008: 2,
    2010: 3,
    2011: 2,
  });
});
