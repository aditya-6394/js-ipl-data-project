const { test, expect } = require('@jest/globals');
const matchesPerYear = require('../src/server/1-matches-per-year');

const data = [
  {
    season: '2001',
  },
  {
    season: '2002',
  },
  {
    season: '2002',
  },

  {
    season: '2003',
  },
  {
    season: '2004',
  },
  {
    season: '2004',
  },
  {
    season: '2005',
  },
];

test('Calculation of matches per year', () => {
  expect(matchesPerYear(data)).toMatchObject({
    2001: 1,
    2002: 2,
    2003: 1,
    2004: 2,
    2005: 1,
  });
});
