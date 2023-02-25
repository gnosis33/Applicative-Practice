import { data } from "../data/data";
import { maxBy, minBy } from "../exercises/e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902




export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  const asteroidYearsArray = data.asteroids.map((asteroid) => asteroid.discoveryYear);
  const asteroidPerYear = asteroidYearsArray.reduce((counts, year) => {
    counts[year] = (counts[year] || 0) + 1;
    return counts;
  }, {});
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const greatestDiscoveryYear = maxBy(Object.entries(asteroidPerYear), ([year, count]) => count);

  return Number(greatestDiscoveryYear[0]);

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
