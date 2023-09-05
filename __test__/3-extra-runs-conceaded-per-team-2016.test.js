const { test, expect } = require('@jest/globals');
const calculateExtraRunsByBowlingTeam = require('../src/server/3-extra-runs-conceaded-per-team-2016');

const matches = [
  {
    id: '1',
    season: '2017',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    toss_winner: 'Royal Challengers Bangalore',
    winner: 'Sunrisers Hyderabad',
  },
  {
    id: '2',
    season: '2016',
    team1: 'Chennai Super Kings',
    team2: 'Delhi Daredevils',
    toss_winner: 'Chennai Super Kings',
    winner: 'Chennai Super Kings',
  },
  {
    id: '3',
    season: '2016',
    date: '2017-04-05',
    team1: 'Kings Xi Punjab',
    team2: 'Mumbai Indians',
    toss_winner: 'Kings Xi Punjab',
    winner: 'Mumbai Indians',
  },
];

const deliveries = [
  {
    match_id: '1',
    inning: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Royal Challengers Bangalore',
    extra_runs: '0',
  },
  {
    match_id: '2',
    inning: '2',
    batting_team: 'Chennai Super Kings',
    bowling_team: 'Delhi Daredevils',
    extra_runs: '5',
  },
  {
    match_id: '3',
    inning: '1',
    batting_team: 'Kings Xi Punjab',
    bowling_team: 'Mumbai Indians',
    extra_runs: '2',
  },
];

test('Calculates Extra Runs per team in 2016', () => {
  expect(calculateExtraRunsByBowlingTeam(matches, deliveries)).toMatchObject({
    'Delhi Daredevils': 5,
    'Mumbai Indians': 2,
  });
});
