var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(studentA, studentB){
  if (studentA.name > studentB.name) {
    return 1;
  }
  else if (studentB.name > studentA.name){
    return -1;
  }
  else {
    return studentB.age - studentA.age;
  }
})

console.log(students);
