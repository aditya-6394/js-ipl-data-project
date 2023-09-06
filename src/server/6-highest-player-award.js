// Find a player who has won the highest number of Player of the Match awards for each season

function playerOfMatch(matches) {
  let awards = {};
  for (let match of matches) {
    let season = match.season;
    let player = match.player_of_match;
    if (awards[season] !== undefined) {
      if (awards[season][player] !== undefined) {
        awards[season][player] += 1;
      } else {
        awards[season][player] = 1;
      }
    } else {
      awards[season] = {};
      awards[season][player] = 1;
    }
  }
  const maxPlayerOfMatch = {};
  for (let season in awards) {
    const max = Math.max(...Object.values(awards[season]));
    maxPlayerOfMatch[season] = {};
    for (let key in awards[season]) {
      if (awards[season][key] === max) {
        maxPlayerOfMatch[season][key] = awards[season][key];
      }
    }
  }
  return maxPlayerOfMatch;
}

module.exports = playerOfMatch;
