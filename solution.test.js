const { searchAndReplace } = require("./solution");

const testCases = [
  [
    "A quick brown fox jumped over the lazy dog",
    "jumped",
    "leaped",
    "A quick brown fox leaped over the lazy dog",
  ],
  [
    "He is Sleeping on the couch",
    "Sleeping",
    "sitting",
    "He is Sitting on the couch",
  ],
  [
    "I think we should look up there",
    "up",
    "Down",
    "I think we should look down there",
  ],
];

describe("Search and replace function", () => {
  test("Should return a string", () => {
    const result = searchAndReplace("Hello I am Ben", "Ben", "Martin");
    expect(typeof result === "string").toBe(true);
  });

  test.each(testCases)(
    "WHEN a sentence of '%s', a before of '%s', and after of '%s' is passed THEN '%s' is returned",
    (sentence, before, after, expected) => {
      const result = searchAndReplace(sentence, before, after);
      expect(result).toBe(expected);
    }
  );
});
