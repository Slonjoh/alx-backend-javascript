const updateStudentGradeByCity = (students, city, newGrades = []) => {
  if (!Array.isArray(students)) {
    return []; // If not an array, return an empty array
  }
  /*Filter students by city*/
  const cityStudents = students.filter(student => student.location === city);

  /*Map to add the grade to each student, defaulting to 'N/A' if no grade is found*/
  return cityStudents.map(student => {
    const gradeObject = newGrades.find(grade => grade.studentId === student.id);

    return {
      ...student, /*Spread the student object to retain existing attributes*/
      /*Add the grade, defaulting to 'N/A'*/
      grade: gradeObject ? gradeObject.grade : 'N/A'
    };
  });
}

export default updateStudentGradeByCity;
