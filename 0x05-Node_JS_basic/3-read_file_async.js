const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const headers = lines[0].split(',');
      const students = lines.slice(1).filter(line => line.trim() !== '').map(line => {
        const values = line.split(',');
        return headers.reduce((obj, header, index) => {
          obj[header.trim()] = values[index].trim();
          return obj;
        }, {});
      });

      const validStudents = students.filter(student => student.firstname && student.lastname && student.age && student.field);

      console.log(`Number of students: ${validStudents.length}`);

      const fields = validStudents.reduce((acc, student) => {
        if (!acc[student.field]) {
          acc[student.field] = [];
        }
        acc[student.field].push(student.firstname);
        return acc;
      }, {});

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
