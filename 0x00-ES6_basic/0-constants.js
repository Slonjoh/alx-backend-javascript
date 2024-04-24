// 0-constants.js
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Using const for a constant value
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Using let because it's mutable
  combination += getLast(); // Modifying the variable
  
  return combination;
}
