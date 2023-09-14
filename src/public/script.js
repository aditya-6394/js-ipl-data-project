/* eslint-disable no-undef */

document.addEventListener('DOMContentLoaded', async function () {
  try {
    await matchesPerYear();
    await matchesWonPerTeamPerYear();
    await extraRunsConceadedPerTeamIn2016();
    await top10economicalBowlersIn2015();
    await wonTheTossAndMatch();
    await highestPlayerAwards();
    await strikeRateOfBatsmanPerYear();
    await highestDismissalOfBatsmanByABowler();
    await bowlerWithBestEconomy();
  } catch (error) {
    console.log('Error');
  }
});

async function matchesPerYear() {
  const result = await fetch('./output/1-matches-per-year.json');
  const data = await result.json();

  var dataArray = [];
  for (var year in data) {
    dataArray.push({
      name: year,
      y: data[year],
    });
  }

  // Create the Highcharts chart
  Highcharts.chart('chart-1', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Matches per year',
    },
    xAxis: {
      categories: Object.keys(data),
      title: {
        text: 'Year',
      },
    },
    yAxis: {
      title: {
        text: 'Matches',
      },
    },
    series: [
      {
        name: 'Matches',
        data: dataArray,
      },
    ],
  });
}

async function matchesWonPerTeamPerYear() {
  const result = await fetch('./output/2-matches-won-per-team-per-year.json');
  const data = await result.json();

  var seriesData = [];

  for (var year in data) {
    var yearData = data[year];
    var series = {
      name: year,
      data: [],
    };

    for (var team in yearData) {
      series.data.push([team, yearData[team]]);
    }

    seriesData.push(series);
  }

  // Create the Highcharts chart
  await Highcharts.chart('chart-2', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Matches won per team per year:',
    },
    xAxis: {
      type: 'category',
      title: {
        text: 'Team',
      },
    },
    yAxis: {
      title: {
        text: 'Wins',
      },
    },
    legend: {
      title: {
        text: 'Year',
      },
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },
    series: seriesData,
  });
}

async function extraRunsConceadedPerTeamIn2016() {
  const result = await fetch(
    './output/3-extra-runs-conceaded-per-team-2016.json',
  );
  const data = await result.json();
  var dataArray = Object.keys(data).map(function (key) {
    return { name: key, y: data[key] };
  });

  // Create the chart
  await Highcharts.chart('chart-3', {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Extra runs conceaded per year:',
    },
    xAxis: {
      categories: dataArray.map(function (item) {
        return item.name;
      }),
    },
    yAxis: {
      title: {
        text: 'Extra Runs',
      },
    },
    series: [
      {
        name: 'Extra Runs',
        data: dataArray.map(function (item) {
          return item.y;
        }),
      },
    ],
  });
}

async function top10economicalBowlersIn2015() {
  const result = await fetch(
    './output/4-top-10-economical-bowlers-in-2015.json',
  );
  const data = await result.json();
  // Convert data to an array of objects
  var dataArray = Object.keys(data).map(function (key) {
    return { name: key, y: data[key] };
  });

  // Create the chart
  Highcharts.chart('chart-4', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Top 10 economical bowlers of 2015',
    },
    xAxis: {
      categories: dataArray.map(function (item) {
        return item.name;
      }),
    },
    yAxis: {
      title: {
        text: 'Economy',
      },
    },
    series: [
      {
        name: 'Economy',
        data: dataArray.map(function (item) {
          return item.y;
        }),
      },
    ],
  });
}

async function wonTheTossAndMatch() {
  const result = await fetch('./output/5-won-the-toss-and-match.json');
  const data = await result.json();
  // Convert data to an array of objects
  var dataArray = Object.keys(data).map(function (key) {
    return { name: key, y: data[key] };
  });

  // Create the chart
  Highcharts.chart('chart-5', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Won the toss and match',
    },
    xAxis: {
      categories: dataArray.map(function (item) {
        return item.name;
      }),
    },
    yAxis: {
      title: {
        text: 'Wins',
      },
    },
    series: [
      {
        name: 'Wins',
        data: dataArray.map(function (item) {
          return item.y;
        }),
      },
    ],
  });
}

async function highestPlayerAwards() {
  const result = await fetch('./output/6-highest-player-award.json');
  const data = await result.json();
  // Prepare the data for Highcharts
  var seriesData = [];

  for (var year in data) {
    var yearData = data[year];
    var series = {
      name: year,
      data: [],
    };

    for (var player in yearData) {
      series.data.push([player, yearData[player]]);
    }

    seriesData.push(series);
  }
  console.log(seriesData);
  // Create the Highcharts chart
  await Highcharts.chart('chart-6', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Highest player awards:',
    },
    xAxis: {
      type: 'category',
      title: {
        text: 'Year',
      },
    },
    yAxis: {
      title: {
        text: 'Wins',
      },
    },
    legend: {
      title: {
        text: 'Year',
      },
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },
    series: seriesData,
  });
}

async function strikeRateOfBatsmanPerYear() {
  const result = await fetch(
    './output/7-strike-rate-of-batsman-per-season.json',
  );
  const data = await result.json();
  var categories = Object.keys(data['DA Warner']);
  var seriesData = [];

  for (var player in data) {
    var playerData = data[player];
    var values = [];

    for (var year in playerData) {
      values.push(playerData[year]);
    }

    seriesData.push({
      name: player,
      data: values,
    });
  }

  // Create the chart
  await Highcharts.chart('chart-7', {
    chart: {
      type: 'line',
      zoomType: 'xy',
    },
    title: {
      text: 'Strike Rate of Batsman per year',
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      title: {
        text: 'Strike Rate',
      },
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    series: seriesData,
  });
}

async function highestDismissalOfBatsmanByABowler() {
  const result = await fetch(
    './output/8-highest-dismissial-of-batsman-by-a-bowler.json',
  );
  const data = await result.json();

  // const dataArray = [];

  const batsman = Object.keys(data);

  // let bowlers = {};
  let plotData = [];

  for (let bat in data) {
    for (let bowl in data[bat]) {
      if (plotData[bowl] === undefined) {
        plotData[bowl] = [];
        for (let i = 0; i < batsman.length; i++) {
          plotData[bowl].push(0);
        }
        plotData[bowl][batsman.indexOf(bat)] = data[bat][bowl];
      } else {
        plotData[bowl][batsman.indexOf(bat)] = data[bat][bowl];
      }
    }
  }
  series = [];
  for (let player in plotData) {
    series.push({
      name: player,
      data: plotData[player],
    });
  }
  // Create the Highcharts chart with reversed axes
  // Highcharts.chart('chart-8', {
  //   chart: {
  //     type: 'column',
  //   },
  //   title: {
  //     text: 'Highest Dismissals of a Batsman',
  //   },
  //   subtitle: {
  //     text: 'Source: IPL Project',
  //   },
  //   xAxis: {
  //     categories: batsman,
  //     crosshair: true,
  //   },
  //   yAxis: {
  //     min: 0,
  //     title: {
  //       text: 'Matches',
  //     },
  //   },
  //   tooltip: {
  //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //     pointFormat:
  //       '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
  //       '<td style="padding:0"><b>{point.y:1f} times</b></td></tr>',
  //     footerFormat: '</table>',
  //     shared: true,
  //     useHTML: true,
  //   },
  //   plotOptions: {
  //     column: {
  //       pointPadding: 0.2,
  //       borderWidth: 0,
  //     },
  //   },
  //   series: series,
  // });
  Highcharts.chart('chart-8', {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'High dismissals of a batsman by a bowler',
    },
    xAxis: {
      categories: batsman,
    },
    yAxis: {
      title: {
        text: 'Dismissals',
      },
    },
    series: series,
  });
}

async function bowlerWithBestEconomy() {
  const result = await fetch(
    './output/9-bowler-with-best-economy-in-super-over.json',
  );
  const data = await result.json();
  var categories = Object.keys(data);
  var values = Object.values(data);

  // Create the chart
  await Highcharts.chart('chart-9', {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Bowler with best economy',
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      title: {
        text: 'Count',
      },
    },
    series: [
      {
        name: 'Count',
        data: values,
      },
    ],
  });
}
