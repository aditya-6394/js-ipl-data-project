const csv = require('csv-parser');
const fs = require('fs');

// Importing the modules from server directory:csvReadandWrite
const matchesPerYear = require('./src/server/1-matches-per-year');
const matchesWonPerTeam = require('./src/server/2-matches-won-per-team-per-year');

// Calling the Modules:
readAndWriteCSV(matchesPerYear, '1-matches-per-year');
readAndWriteCSV(matchesWonPerTeam, '2-matches-won-per-team-per-year');

function readAndWriteCSV(cb, path) {
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
            `./src/public/output/${path}.json`,
            JSON.stringify(cb(matches, deliveries), null, 2),
            (err) => {
              if (err) throw err;
              console.log('The file has been saved!');
            },
          );
        });
    });
}
