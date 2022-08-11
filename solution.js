const searchAndReplace = (sentence, before, after) => {
  let modifiedAfter = "";
  if (before[0].toUpperCase() === before[0]) {
    modifiedAfter += after[0].toUpperCase() + after.substring(1);
    return sentence.replace(before, modifiedAfter);
  } else {
    modifiedAfter += after[0].toLowerCase() + after.substring(1);
    return sentence.replace(before, modifiedAfter);
  }
};

module.exports = {
  searchAndReplace,
};
