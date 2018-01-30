const GradeBook = () => {
  this.grades = {};
};


GradeBook.prototype.addGrade = (student, grade) => {
  if (this.grades.student) {
    this.grades.student.push(grade);
  } else {
    this.grades.student = [grade];
  }
};


GradeBook.prototype.averageGrade = (student) => {
  if (this.grades.student) {
    var sum = this.grades.student.reduce(function(a,b){
      return a + b;
    });

    return sum/this.grades.student.length;
  } else {

    return 'This student is not in your gradebook';
  }
};
