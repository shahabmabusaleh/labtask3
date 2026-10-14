class Person {
constructor(name, age, email) {
this.name = "Saleh";
this.age = 22;
this.email ="shahsaleh@gmail.com";
}

getPersonInfo() {
return{
Name: this.name,
Age: this.age,
Email: this.email}
}
}
module.exports = Person;