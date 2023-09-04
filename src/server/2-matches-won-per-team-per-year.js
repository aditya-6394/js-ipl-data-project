function matchesWonPerTeam(matches) {
  let matchesWonPerTeam = {};
  for (let match of matches) {
    let year = match['season'];
    let team = match['winner'];
    if (matchesWonPerTeam[year] != undefined) {
      if (matchesWonPerTeam[year][team] != undefined) {
        matchesWonPerTeam[year][team] += 1;
      } else {
        matchesWonPerTeam[year][team] = 1;
      }
    } else {
      matchesWonPerTeam[year] = {};
    }
  }
  return matchesWonPerTeam;
}

module.exports = matchesWonPerTeam;
