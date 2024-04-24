export default function taskBlock(trueOrFalse) {
  let task = false; // `let` ensures block scope
  let task2 = true; // `let` ensures block scope

  if (trueOrFalse) {
    let task = true; // Now this `task` is scoped to this block only
    let task2 = false; // Similarly, this `task2` is scoped to this block
  }

  return [task, task2]; // These return the original `task` and `task2`
}
