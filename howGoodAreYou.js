const betterThanAverage = (classPoints, yourPoints) => {
  return (
    yourPoints > classPoints.reduce((acc, p) => acc + p, 0) / classPoints.length
  );
};

console.log(betterThanAverage([10, 30, 20], 10));
