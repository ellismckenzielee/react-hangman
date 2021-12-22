export const createUniqueArray = (word) => {
  const uniques = [];
  word.split("").forEach((letter) => {
    if (!uniques.includes(letter)) uniques.push(letter);
  });
  return uniques;
};
