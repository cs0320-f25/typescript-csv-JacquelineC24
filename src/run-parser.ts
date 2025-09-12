import { parseCSV } from "./basic-parser";

/*
  Example of how to run the parser outside of a test suite.
*/

const DATA_FILE = "./data/people.csv"; // update with your actual file name
const TEST_DATA_FILE = "./data/testdata.csv"; // second data file

async function main() {
  // Because the parseCSV function needs to "await" data, we need to do the same here.
  const results = await parseCSV(DATA_FILE)

  const testResults = await parseCSV(TEST_DATA_FILE)

  for(const record of testResults)
    console.log(record)
  for(const record in testResults)
    console.log(record)

  // Notice the difference between "of" and "in". One iterates over the entries, 
  // another iterates over the indexes only.
  for(const record of results)
    console.log(record)
  for(const record in results)
    console.log(record)
}

main();