function topTenEconomicalBowlers(matches, deliveries) {
  const matchesIn2015 = [];
  for (let match of matches) {
    if (match.season == '2015') {
      matchesIn2015.push(match.id);
    }
  }
  const bowlerStats = {};

  for (let delivery of deliveries) {
    if (matchesIn2015.includes(delivery.match_id)) {
      if (!bowlerStats[delivery.bowler]) {
        bowlerStats[delivery.bowler] = {
          total_balls: 1,
          total_runs:
            Number(delivery.wide_runs) +
            Number(delivery.noball_runs) +
            Number(delivery.batsman_runs),
        };
      } else {
        bowlerStats[delivery.bowler]['total_balls'] += 1;
        bowlerStats[delivery.bowler]['total_runs'] +=
          Number(delivery.wide_runs) +
          Number(delivery.noball_runs) +
          Number(delivery.batsman_runs);
      }
    }
  }

  const bowlerEconomy = {};
  for (let bowler in bowlerStats) {
    bowlerEconomy[bowler] =
      bowlerStats[bowler]['total_runs'] /
      (bowlerStats[bowler]['total_balls'] / 6);
  }

  const sortedObject = Object.entries(bowlerEconomy).sort(
    (x, y) => x[1] - y[1],
  );
  const top10 = sortedObject.slice(0, 10);
  const top10economical = {};
  for (let items of top10) {
    top10economical[items[0]] = items[1];
  }
  return top10economical;
}

module.exports = topTenEconomicalBowlers;
