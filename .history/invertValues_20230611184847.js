// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

const covert = (array) => {
  return array.map((num) => -num);
};

console.log(covert([1, 2, -3, -34, -4, 5, -32]));
