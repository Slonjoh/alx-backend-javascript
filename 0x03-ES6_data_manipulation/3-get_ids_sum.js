const getStudentIdsSum = (students) => {
  if (!Array.isArray(students)) {
    return 0; /*If not an array, return 0 (default accumulator value)*/
  }
  /*Use reduce to accumulate the sum of all student IDs*/
  /*0 is the initial value for the accumulator*/
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}

export default getStudentIdsSum;
