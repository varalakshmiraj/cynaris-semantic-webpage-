
"use strict";

// Student dataset
const students = [
    { id: 1, name: "Aarav", marks: 85, course: "JavaScript" },
    { id: 2, name: "Diya", marks: 92, course: "Python" },
    { id: 3, name: "Rohan", marks: 67, course: "JavaScript" },
    { id: 4, name: "Meera", marks: 78, course: "Python" },
    { id: 5, name: "Kiran", marks: 95, course: "JavaScript" }
];

// Arrow function
const greet = (name) => `Welcome, ${name}!`;

console.log(greet("Cynaris"));

// Array destructuring
const [firstStudent, secondStudent] = students;

console.log(firstStudent, secondStudent);

// Object destructuring
const { name, marks } = firstStudent;

console.log(`${name} scored ${marks} marks.`);

// filter() - students scoring 80 or above
const highScorers = students.filter(
    student => student.marks >= 80
);

// map() - get student names
const studentNames = students.map(
    ({ name }) => name
);

console.log("Student names:", studentNames);

// reduce() - calculate total marks
const totalMarks = students.reduce(
    (total, student) => total + student.marks, 0
);

console.log("Total marks:", totalMarks);

// Calculate average
const averageMarks = totalMarks / students.length;

console.log(`Average marks: ${averageMarks.toFixed(2)}`);

// Interactive student dashboard
document.addEventListener("DOMContentLoaded", () => {

    const studentList = document.getElementById("student-list");
    const summary = document.getElementById("summary");
    const filterButton = document.getElementById("filter-button");
    const showAllButton = document.getElementById("show-all-button");

    // Display students
    const displayStudents = (studentArray) => {

        studentList.innerHTML = studentArray
            .map(({ name, marks, course }) => `
                <li>
                    <strong>${name}</strong>
                    - ${marks} marks
                    (${course})
                </li>
            `)
            .join("");

    };

    // Display all students initially
    displayStudents(students);

    summary.textContent = `Showing all ${students.length} students.`;

    // Filter students
    filterButton.addEventListener("click", () => {

        const filteredStudents = students.filter(
            student => student.marks >= 80
        );

        displayStudents(filteredStudents);

        summary.textContent =
            `Showing ${filteredStudents.length} students scoring 80 or above.`;

    });

    // Show all students
    showAllButton.addEventListener("click", () => {

        displayStudents(students);

        summary.textContent =
            `Showing all ${students.length} students.`;

    });

});
