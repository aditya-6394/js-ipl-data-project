const { test, expect } = require('@jest/globals');
const highestDismissals = require('../src/server/8-highest-dismissial-of-batsman-by-a-bowler');

const deliveries = [
  {
    player_dismissed: 'Virat Kohli',
    bowler: 'Bumrah',
    dismissal_kind: 'bowled',
  },
  {
    player_dismissed: 'Virat Kohli',
    bowler: 'Bumrah',
    dismissal_kind: 'bowled',
  },
  {
    player_dismissed: 'Virat Kohli',
    bowler: 'Bumrah',
    dismissal_kind: 'Run Out',
  },
  {
    player_dismissed: 'Virat Kohli',
    bowler: 'Boult',
    dismissal_kind: 'bowled',
  },
  {
    player_dismissed: 'Rohit Sharma',
    bowler: 'Afridi',
    dismissal_kind: 'bowled',
  },
  {
    player_dismissed: 'Rohit Sharma',
    bowler: 'Afridi',
    dismissal_kind: 'bowled',
  },
  {
    player_dismissed: 'Rohit Sharma',
    bowler: 'Kuldeep',
    dismissal_kind: 'bowled',
  },
  {
    player_dismissed: 'Rohit Sharma',
    bowler: 'Kuldeep',
    dismissal_kind: 'stumped',
  },
];

test('Highest dismissals of a batsman by a bowler', () => {
  expect(highestDismissals(null, deliveries)).toMatchObject({
    'Virat Kohli': {
      Bumrah: 2,
    },
    'Rohit Sharma': {
      Afridi: 2,
      Kuldeep: 2,
    },
  });
});
