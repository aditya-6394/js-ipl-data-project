function bestEconomySuperOver(_, deliveries) {
  let superOverDeliveries = [];
  for (let delivery of deliveries) {
    if (delivery.is_super_over === '1') {
      superOverDeliveries.push(delivery);
    }
  }
  const superOverBowlerData = {};
  for (let delivery of superOverDeliveries) {
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
  const bowlerEconomyInSuperOver = {};
  for (const bowler in superOverBowlerData) {
    bowlerEconomyInSuperOver[bowler] =
      superOverBowlerData[bowler]['total_runs'] /
      (superOverBowlerData[bowler]['total_balls'] / 6);
  }
  const sortedObject = Object.entries(bowlerEconomyInSuperOver).sort(
    (x, y) => x[1] - y[1],
  );
  let bestEconomy = {};
  for (let bowler of sortedObject) {
    if (bowler[1] === sortedObject[0][1]) {
      let bow = bowler[0];
      bestEconomy[bow] = bowler[1];
    }
  }
  return bestEconomy;
}

module.exports = bestEconomySuperOver;
