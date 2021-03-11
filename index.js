// grid traveler
// travel in a 2d grid from top-left to botto-right
// only movements to right and bottom are allowed
// calculate how many paths can be possible given the grid height and width

const gridTraveler = (h, w, memo = {}) => {
  const key = `${h},${w}`;
  if (key in memo) return memo[key];
  if (h === 1 && w === 1) return 1;
  if (h === 0 || w === 0) return 0;
  memo[key] = gridTraveler(h - 1, w, memo) + gridTraveler(h, w - 1, memo);
  return memo[key];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(0, 1)); // 0
console.log(gridTraveler(5, 7)); // 210
console.log(gridTraveler(15, 11)); // 1961256
