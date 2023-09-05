const { test, expect } = require('@jest/globals');
const playerOfMatch = require('../src/server/6-highest-player-award');

const matches = [
  { season: '2001', player_of_match: 'KL Rahul' },
  { season: '2001', player_of_match: 'KL Rahul' },
  { season: '2001', player_of_match: 'KL Rahul' },
  { season: '2001', player_of_match: 'Virat Kohli' },
  { season: '2002', player_of_match: 'Surya Kumar Yadav' },
  { season: '2002', player_of_match: 'Surya Kumar Yadav' },
  { season: '2002', player_of_match: 'Surya Kumar Yadav' },
  { season: '2002', player_of_match: 'Rohit Sharma' },
  { season: '2003', player_of_match: 'Virat Kohli' },
  { season: '2003', player_of_match: 'Virat Kohli' },
  { season: '2003', player_of_match: 'Surya Kumar Yadav' },
  { season: '2003', player_of_match: 'Virat Kohli' },
  { season: '2003', player_of_match: 'Rohit Sharma' },
  { season: '2004', player_of_match: 'Rohit Sharma' },
  { season: '2004', player_of_match: 'Rohit Sharma' },
  { season: '2004', player_of_match: 'Rohit Sharma' },
  { season: '2004', player_of_match: 'Surya Kumar Yadav' },
  { season: '2004', player_of_match: 'Surya Kumar Yadav' },
  { season: '2004', player_of_match: 'Surya Kumar Yadav' },
];

test('highest player of the match for each season', () => {
  expect(playerOfMatch(matches)).toMatchObject({
    2001: {
      'KL Rahul': 3,
    },
    2002: {
      'Surya Kumar Yadav': 3,
    },
    2003: {
      'Virat Kohli': 3,
    },
    2004: {
      'Rohit Sharma': 3,
      'Surya Kumar Yadav': 3,
    },
  });
});
