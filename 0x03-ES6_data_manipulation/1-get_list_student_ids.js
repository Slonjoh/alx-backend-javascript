function getListStudentIds(students) {
  /*Return an empty array if the input is not an array*/
  if (!Array.isArray(students)) {
    return [];
  }

  /*Use map to return an array of ids from the array of student objects*/
  return students.map(student => student.id);
}

export default getListStudentIds;
