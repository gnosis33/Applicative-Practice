import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  const validPlanets = data.planets.filter((planet) => planet.avgTemp !== undefined && planet.avgTemp !== null && !isNaN(planet.avgTemp));
  const averagePlanetsAvgTemp = validPlanets.reduce((acc, planet) => acc + planet.avgTemp, 0) / validPlanets.length;
  return averagePlanetsAvgTemp;
};




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
