const searchAndReplace = (sentence, before, after) => {
  const beforeRegex = new RegExp(before, "g");
  let modifiedAfter =
    before[0].toUpperCase() === before[0]
      ? after[0].toUpperCase() + after.substring(1)
      : after[0].toLowerCase() + after.substring(1);

  return sentence.replace(beforeRegex, modifiedAfter);
};

module.exports = {
  searchAndReplace,
};
