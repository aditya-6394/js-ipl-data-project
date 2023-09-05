const csv = require('csv-parser');
const fs = require('fs');

// Importing the modules from server directory:csvReadandWrite:
const matchesPerYear = require('./src/server/1-matches-per-year');
const matchesWonPerTeam = require('./src/server/2-matches-won-per-team-per-year');
const calculateExtraRunsByBowlingTeam = require('./src/server/3-extra-runs-conceaded-per-team-2016');
const topTenEconomicalBowlers = require('./src/server/4-top-10-economical-bowlers-in-2015');
const tossAndGameWinner = require('./src/server/5-won-the-toss-and-match');
const playerOfMatch = require('./src/server/6-highest-player-award');
const strikeRateOfBatsmanPerSeason = require('./src/server/7-strike-rate-of-batsman-per-season');
const highestDismissals = require('./src/server/8-highest-dismissial-of-batsman-by-a-bowler');
const bestEconomySuperOver = require('./src/server/9-bowler-with-best-economy-in-super-over');

// Calling the Modules:
readAndWriteCSV(matchesPerYear, '1-matches-per-year');
readAndWriteCSV(matchesWonPerTeam, '2-matches-won-per-team-per-year');
readAndWriteCSV(
  calculateExtraRunsByBowlingTeam,
  '3-extra-runs-conceaded-per-team-2016',
);
readAndWriteCSV(topTenEconomicalBowlers, '4-top-10-economical-bowlers-in-2015');
readAndWriteCSV(tossAndGameWinner, '5-won-the-toss-and-match');
readAndWriteCSV(playerOfMatch, '6-highest-player-award');
readAndWriteCSV(
  strikeRateOfBatsmanPerSeason,
  '7-strike-rate-of-batsman-per-season',
);
readAndWriteCSV(
  highestDismissals,
  '8-highest-dismissial-of-batsman-by-a-bowler',
);
readAndWriteCSV(
  bestEconomySuperOver,
  '9-bowler-with-best-economy-in-super-over',
);

// Function for reading and writing into files:
function readAndWriteCSV(cb, filePath) {
  let matches = [];
  let deliveries = [];
  fs.createReadStream('./src/data/matches.csv')
    .pipe(csv({}))
    .on('data', (data) => matches.push(data))
    .on('end', () => {
      fs.createReadStream('./src/data/deliveries.csv')
        .pipe(csv({}))
        .on('data', (data) => deliveries.push(data))
        .on('end', () => {
          fs.writeFile(
            `./src/public/output/${filePath}.json`,
            JSON.stringify(cb(matches, deliveries), null, 2),
            (err) => {
              if (err) throw err;
              console.log(
                `The file ${filePath} has been successfully created.`,
              );
            },
          );
        });
    });
}
