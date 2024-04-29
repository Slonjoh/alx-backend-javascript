function getStudentIdsSum(students) {
  /*Use reduce to accumulate the sum of all student IDs*/
  /*0 is the initial value for the accumulator*/
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}

export default getStudentIdsSum;
