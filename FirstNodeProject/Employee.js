// This is a module and by default it is not passed as a class to the external world.
// Instead, it wrapped in a function as below - and hence all the parameters all accessible to us -
// (function (exports, require, module, __filename, __dirname) {

// })
// So we can access the parameters like -
// console.log(__dirname); // prints /Users/kaustav/Desktop/JSProjects/Node/FirstNodeProject

class Employee {
  constructor(name, job, experience) {
    this.name = name;
    this.job = job;
    this.experience = experience;
  }

  showEmpDetails() {
    console.log(
      `${this.name} is a ${this.job} with ${this.experience} years of experience`
    );
  }
}

module.exports = Employee;
