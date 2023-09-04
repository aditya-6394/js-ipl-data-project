function matchesPerYear(matches) {
  let matchesCount = {};
  for (let match of matches) {
    if (matchesCount[match['season']] != undefined) {
      matchesCount[match['season']] += 1;
    } else {
      matchesCount[match['season']] = 1;
    }
  }
  return matchesCount;
}

module.exports = matchesPerYear;
