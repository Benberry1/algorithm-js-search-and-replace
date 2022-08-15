# Algorithm - Search & Replace

The aim of this algorithm challenge was to create a function that takes in three parameters:

- sentence (string)
- before (string) - A word that is found within the sentence
- after (string) - A new word not currently in the sentence.

When this function is called the 'before' parameter is to be replaced with the 'after' parameter and therefore changes the sentence.

However, you must preserve the case of the first character in the before word. E.g., if before = "Sleeping" and after="walking" then you must ensure that after is inserted into the sentence as "Walking"

I have created a test file that outlines some test cases for this challenge.

## Solution Notes

Regarding the instructions from freeCodeCamp, although the solution passess the required tests. It is unclear whether they would like me to replace all occurence of the word or just the first. The solution replaces ALL occurences. If you wanted to replace just the first ocurrences then you would still use the replace() method. However, you would have the below code in your return statement instead of a RegExp version of before.

```
return sentence.replace(before, modifiedAfter);
```

Instead of the current:

```
const beforeRegex = new RegExp(before, "g");

return sentence.replace(beforeRegex, modifiedAfter);
```

## Documentation

Below is a list of methods I used with links to the relevant MDN page.

- [If statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- String methods
  - [.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  - [.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
  - [.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

The alternative solution also used these methods with the addition of [RegExp - (Regular Expresssions)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Acknowledgments

This algorithm challenge was provided by [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures). Although they do provide test cases I wanted to keep practising using Jest. This also helps break down the challenge into the required acceptence criteria to achieve the challenge.

## Dev Dependencies

- Jest was used for creating test cases

## Installation

To see the code and tests in action follow the below terminal commands:

Ensure that you have [Git](https://git-scm.com/) installed. If not you can just download the files to your computer.

```
git clone (name of repo url/ssh here)
```

```
cd (project-name here)
```

```
npm install
```

```
npm test
```
