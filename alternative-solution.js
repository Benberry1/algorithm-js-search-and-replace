// Regex solution
const searchAndReplace = (sentence, before, after) => {
  const regex = /^[A-Z]/;
  if (regex.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return sentence.replace(before, after);
};
