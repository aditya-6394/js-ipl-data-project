function bestEconomySuperOver(_, deliveries) {
  const superOver = deliveries.filter((delivery) => {
    if (delivery.is_super_over == '1') {
      return delivery;
    }
  });
  const superOverBowlerData = {};
  for (let delivery of superOver) {
    if (!superOverBowlerData[delivery['bowler']]) {
      superOverBowlerData[delivery['bowler']] = {
        total_runs:
          Number(delivery['wide_runs']) +
          Number(delivery['noball_runs']) +
          Number(delivery['batsman_runs']),
        total_balls: 1,
      };
    } else {
      superOverBowlerData[delivery['bowler']]['total_runs'] +=
        Number(delivery['wide_runs']) +
        Number(delivery['noball_runs']) +
        Number(delivery['batsman_runs']);
      superOverBowlerData[delivery['bowler']]['total_balls'] += 1;
    }
  }
  const bowlerEconomy = {};
  for (const bowler in superOverBowlerData) {
    bowlerEconomy[bowler] =
      superOverBowlerData[bowler]['total_runs'] /
      (superOverBowlerData[bowler]['total_balls'] / 6);
  }
  const sortedObject = Object.entries(bowlerEconomy).sort(
    (x, y) => x[1] - y[1],
  );
  // console.log(sortedObject);
  const player = {};
  player[sortedObject[0][0]] = sortedObject[0][1];
  return player;
}

module.exports = bestEconomySuperOver;
