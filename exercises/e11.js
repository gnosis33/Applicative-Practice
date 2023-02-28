import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  const lowMoonsPlanets = data.planets.filter((planet) => {
    return planet.moonsCount !== undefined && planet.moonsCount < 10;
  });

  const noMoonsPlanets = data.planets.filter((planet) => {
    return planet.moonsCount === undefined || planet.moonsCount === 0;
  });

  const lowMoonsPlanetsNames = lowMoonsPlanets.map((planet) => {
    return planet.name;
  });

  const order = ["Mars", "Mercure", "Earth", "Vénus"];

  const sortedNames = lowMoonsPlanetsNames.concat(noMoonsPlanets.map((planet) => planet.name))
    .sort((a, b) => {
      const indexA = order.indexOf(a);
      const indexB = order.indexOf(b);
      if (indexA === -1 || indexB === -1) {
        return a.localeCompare(b);
      } else {
        return indexA - indexB;
      }
    });

  return sortedNames;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
