function strikeRateOfBatsmanPerSeason(matches, deliveries) {
  const matchIdSeasonMap = {};
  matches.map((match) => {
    if (matchIdSeasonMap[match.id] == undefined) {
      matchIdSeasonMap[match.id] = match.season;
    }
  });

  const batsmanStats = {};
  deliveries.map((delivery) => {
    const batsman = delivery.batsman;
    const runs = Number(delivery.batsman_runs);
    const season = matchIdSeasonMap[delivery.match_id];
    if (!batsmanStats[batsman]) {
      batsmanStats[batsman] = {};
      batsmanStats[batsman][season] = {};
      batsmanStats[batsman][season]['runs_scored'] = runs;
      if (delivery.wide_runs != '0' || delivery.noball_runs != 0) {
        batsmanStats[batsman][season]['balls_faced'] = 0;
      } else {
        batsmanStats[batsman][season]['balls_faced'] = 1;
      }
    } else {
      if (!batsmanStats[batsman][season]) {
        batsmanStats[batsman][season] = {};
        batsmanStats[batsman][season]['runs_scored'] = runs;
        if (delivery.wide_runs != '0' || delivery.noball_runs != 0) {
          batsmanStats[batsman][season]['balls_faced'] = 0;
        } else {
          batsmanStats[batsman][season]['balls_faced'] = 1;
        }
      } else {
        batsmanStats[batsman][season]['runs_scored'] += runs;
        if (delivery.wide_runs != '0' || delivery.noball_runs != 0) {
          batsmanStats[batsman][season]['balls_faced'] += 0;
        } else {
          batsmanStats[batsman][season]['balls_faced'] += 1;
        }
      }
    }
  });

  const strikeRate = {};

  for (let batsman in batsmanStats) {
    strikeRate[batsman] = {};
    for (let season in batsmanStats[batsman]) {
      const runs = batsmanStats[batsman][season]['runs_scored'];
      const balls = batsmanStats[batsman][season]['balls_faced'];
      strikeRate[batsman][season] = (runs / balls) * 100;
    }
  }
  return strikeRate;
}

module.exports = strikeRateOfBatsmanPerSeason;
