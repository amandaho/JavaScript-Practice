(function() {
  //keeps track of the initial population of hares
  let startingPopulation = 200;
  //keeps track of what percentage is born each week
  let birthRate = .10;
  //represents how long we're trying to simulate
  let numberOfWeeks = 5;

  let populationGrowth = startingPopulation * Math.pow((1 + birthRate),numberOfWeeks);

  console.log(populationGrowth);

})();
