function highestDismissals(_, deliveries) {
  const playerDismissals = {};
  for (const delivery of deliveries) {
    const batsman = delivery.player_dismissed;
    const dismissal_kind = delivery.dismissal_kind;
    const bowler = delivery.bowler;
    if (
      dismissal_kind == 'caught' ||
      dismissal_kind == 'bowled' ||
      dismissal_kind == 'lbw' ||
      dismissal_kind == 'caught and bowled' ||
      dismissal_kind == 'stumped'
    ) {
      if (!playerDismissals[batsman]) {
        playerDismissals[batsman] = {};
      }
      if (playerDismissals[batsman][bowler] !== undefined) {
        playerDismissals[batsman][bowler] += 1;
      } else {
        playerDismissals[batsman][bowler] = 1;
      }
    }
  }
  const highestDismissalPlayerCount = {};

  for (let player in playerDismissals) {
    let arr = Object.values(playerDismissals[player]);
    let max = Math.max(...arr);
    highestDismissalPlayerCount[player] = {};
    for (let bowler in playerDismissals[player]) {
      if (playerDismissals[player][bowler] === max) {
        highestDismissalPlayerCount[player][bowler] =
          playerDismissals[player][bowler];
      }
    }
  }
  return highestDismissalPlayerCount;
}

module.exports = highestDismissals;
