import { Cpp, Java, React } from "./subjects";  // Importing the defined subjects
import { Teacher } from "./subjects/Teacher";  // Importing the Teacher interface

// Creating and exporting constants for different subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Creating a teacher with experience in C
export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,  // Experience in C
};

// For Cpp subject
console.log("C++");  // Logging to the console
cpp.setTeacher(cTeacher);  // Setting the teacher for Cpp
console.log(cpp.getRequirements());  // Logging the requirements
console.log(cpp.getAvailableTeacher());  // Logging the available teacher

// For Java subject
console.log("Java");
java.setTeacher(cTeacher);  // Setting the teacher for Java
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("React");
react.setTeacher(cTeacher);  // Setting the teacher for React
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
