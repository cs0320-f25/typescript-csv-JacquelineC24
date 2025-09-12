import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const TESTDATA_CSV_PATH = path.join(__dirname, "../data/testdata.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(9);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV splits correctly when there are commas in the data", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  expect(results[6]).toEqual(["Smith, John", "30"]);
})

test("parseCSV yields empty fields", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  expect(results[7]).toEqual(["\"\"", "10"]);
  expect(results[8]).toEqual(["Josh", ""]);
})

test("parseCSV ignores empty lines", async () => {
  const testResults = await parseCSV(TESTDATA_CSV_PATH)
  expect(testResults).toHaveLength(2);
  expect(testResults[0]).toEqual(["a", "b"]);
  expect(testResults[1]).toEqual(["c"]);
})

test("parseCSV handles double-quoted fields", async () => {
  const testResults = await parseCSV(TESTDATA_CSV_PATH)
  expect(testResults[3]).toEqual(["\"he said \"hello world\"\"", "John"]);
})

test("parseCSV ignores spaces around values", async () => {
  const testResults = await parseCSV(TESTDATA_CSV_PATH)
  expect(testResults[4]).toEqual(["hi", "there"]);
  expect(testResults[5]).toEqual(["this is one field", "this is another"]);
})

