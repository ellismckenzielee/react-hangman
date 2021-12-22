export const createUniqueArray = (word) => {
  const uniques = [];
  word.split("").forEach((letter) => {
    if (!uniques.includes(letter) && /[A-Z]+/.test(letter)) uniques.push(letter);
  });
  return uniques;
};
