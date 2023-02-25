import { p } from "vitest/dist/index-5aad25c1";
import { data } from "../data/data";

// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetNames(data) {
  // Your code here...
  let planets = [];
  for (let i = 0; i < data.planets.length; i++) {
    planets.push(data.planets[i].name);
  };
  return planets;
};

/* ERROR:  test/e1.test.js [ test/e1.test.js ]
Error: Error: Cannot find module vitest/dist/index-5aad25c1 imported from 
file:///C:/Users/14803/Documents/Devslopes-git/applicative-practice-unsolved, 
file:///C:/Users/14803/Documents/Devslopes-git/, 
file:///C:/Users/14803/Documents/Devslopes-git/applicative-practice-unsolved/_index.js, 
file:///C:/Users/14803/Documents/Devslopes-git/node_modules */

//unsure of why this error is occuring.


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
