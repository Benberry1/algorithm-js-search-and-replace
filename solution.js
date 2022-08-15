const searchAndReplace = (sentence, before, after) => {
  let modifiedAfter =
    before[0].toUpperCase() === before[0]
      ? after[0].toUpperCase() + after.substring(1)
      : after[0].toLowerCase() + after.substring(1);

  return sentence.replace(before, modifiedAfter);
};

module.exports = {
  searchAndReplace,
};
