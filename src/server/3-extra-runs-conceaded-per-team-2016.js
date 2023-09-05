function calculateExtraRunsByBowlingTeam(matches, deliveries) {
  const matchesIn2016 = matches.reduce((acc, match) => {
    if (match.season === '2016') {
      acc.push(match.id);
    }
    return acc;
  }, []);

  const extraRuns = {};

  deliveries.forEach((delivery) => {
    if (matchesIn2016.includes(delivery.match_id)) {
      extraRuns[delivery.bowling_team] =
        (extraRuns[delivery.bowling_team] || 0) + Number(delivery.extra_runs);
    }
  });

  return extraRuns;
}

module.exports = calculateExtraRunsByBowlingTeam;
