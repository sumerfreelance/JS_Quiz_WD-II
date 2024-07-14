const student = {
  name: "Syed Umer Shah",
  age: 18,
  grades: [85, 90, 78, 92, 88],
  calculateAverage: function() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }
};

console.log(student.name);
console.log(student.age);
console.log(student.grades);
console.log(student.calculateAverage());