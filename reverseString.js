// Function that takes a string and reverse it

const reverse = (str) => {
  let reverseWord = "";
  const strLength = str.length;
  for (let i = 1; i <= strLength; i++) {
    reverseWord += str[strLength - i];
  }

  return reverseWord;
};

console.log(reverse("Ahmed Morsy"));
