function EmployeeInfo(name, Salary)
{
console.log("Welcome " + name + "Your monthly salary is " + Salary);
}
const currentDateTime = new Date();

console.log("This is my first programme");
console.log("Programme run on : " + currentDateTime.toLocaleString());

var EmpName = "Saleh ";
var EmpSalary = 50000;

EmployeeInfo(EmpName, EmpSalary);

const EmpSkills = (Skills, name, LabGrp) => {
    console.log(" Student ID " + name + " Expert in "+ Skills)
    console.log(" Lab Group Name ",LabGrp)
}
EmpSkills("java", "2967914", "Grp 18")

const student= require('./StudentInfo')
const person = require('./Person')

console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)

console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
person1= new person("Saleh","BD","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")