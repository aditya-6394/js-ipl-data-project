function tossAndGameWinner(matches) {
  let tossAndGameWinnerList = {};
  for (let match of matches) {
    if (match.toss_winner == match.winner) {
      if (tossAndGameWinnerList[match.winner] != undefined) {
        tossAndGameWinnerList[match.winner] += 1;
      } else {
        tossAndGameWinnerList[match.winner] = 1;
      }
    }
  }
  return tossAndGameWinnerList;
}

module.exports = tossAndGameWinner;
