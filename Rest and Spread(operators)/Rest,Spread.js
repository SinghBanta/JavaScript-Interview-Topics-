//Using Rest Operator
let students = {
    name: "Ravi",
    age: 23,
    hobbies: ["reading", "coding", "playing", "sleeping"],
};

// const {...value} = students; 
// console.log(value);

// Using spread operator to copy the values of students object.
let newStudent = {
    ...students, 
    name: "Raj", // Changing the name of the new student object.
    id:100, // Adding new key value pair to the new student object.;
};

console.log(newStudent); 